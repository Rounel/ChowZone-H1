import React from 'react';
import {MainLayout, ConfigLayout} from "../layout";
import { items } from '../constants/index.js';

export default function Peripheriques() {
  return (
    <MainLayout>
      <ConfigLayout kindOfConfig="Périphériques" configArray={items}/>
    </MainLayout>
  )
}
