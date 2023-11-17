"use client"
import styles from './page.module.css'
import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@mui/material';

export default function Home() {

  return (

    <main className={styles.main}>
      
    <h1>Application Y</h1>
    
    <Button variant="contained" href="/about">About Us</Button>

        </main>
  );
}
