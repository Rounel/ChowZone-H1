import React from 'react';
import {MainLayout, ConfigLayout} from "../layout";
import { items } from '../constants/index.js';

export default function Config1600() {
  return (
    <MainLayout>
      <ConfigLayout kindOfConfig="Config à 1600€" configArray={items}/>
    </MainLayout>
  )
}
