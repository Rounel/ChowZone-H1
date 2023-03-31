import React, {useState} from 'react';
import {MainLayout, ConfigLayout} from "../layout";
import { items } from '../constants/index.js';

export default function Config1100() {
  return (
    <MainLayout>
      <ConfigLayout kindOfConfig="Config à 1100€" configArray={items}/>
    </MainLayout>
  )
}
