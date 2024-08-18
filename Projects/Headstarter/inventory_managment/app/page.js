'use client'

import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  deleteDoc,
  getDoc,
} from 'firebase/firestore';
import { Plus, Minus, Search } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [inventory, setInventory] = useState([]);
  const [itemName, setItemName] = useState('');
  const [plus, setPlus] = useState(0);
  const [searchItem, setSearchItem] = useState('');

  const updateInventory = async () => {
    const snapshot = query(collection(firestore, 'inventory-app'));
    const docs = await getDocs(snapshot);
    const inventoryList = [];
    docs.forEach((doc) => {
      inventoryList.push({ name: doc.id, ...doc.data() });
    });
    setInventory(inventoryList);
  };

  useEffect(() => {
    updateInventory();
  }, []);

  const addItem = async (item, amount = 1) => {
    const docRef = doc(collection(firestore, 'inventory-app'), item);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { quantity } = docSnap.data();
      await setDoc(docRef, { quantity: quantity + parseInt(amount) });
    } else {
      await setDoc(docRef, { quantity: parseInt(amount) });
    }
    await updateInventory();
  };

  const subtractItem = async (item) => {
    const docRef = doc(collection(firestore, 'inventory-app'), item);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { quantity } = docSnap.data();
      if (quantity <= 1) {
        await deleteDoc(docRef);
      } else {
        await setDoc(docRef, { quantity: quantity - 1 });
      }
    }
    await updateInventory();
  };

  const filteredInventory = inventory.filter((item) =>
    item.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8 py-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold mb-2">Inventory Management System</h1>
        <p className="text-xl">Manage your pantry items efficiently. Add, remove, and search for items with ease.</p>
      </header>

      <div className="flex justify-between items-center mb-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add New Item</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Item</DialogTitle>
              <DialogDescription>Enter the item details below.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Input
                placeholder="Item name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
              <Input
                type="number"
                placeholder="Quantity"
                value={plus}
                onChange={(e) => setPlus(e.target.value)}
              />
            </div>
            <Button onClick={() => {
              addItem(itemName, plus);
              setItemName('');
              setPlus(0);
            }}>
              Add Item
            </Button>
          </DialogContent>
        </Dialog>

        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            className="pl-8"
            placeholder="Search items..."
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredInventory.map(({ name, quantity }) => (
          <Card key={name}>
            <CardHeader>
              <CardTitle>{name.charAt(0).toUpperCase() + name.slice(1)}</CardTitle>
              <CardDescription>Quantity: {quantity}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="icon" onClick={() => subtractItem(name)}>
                <Minus className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => addItem(name, 1)}>
                <Plus className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}