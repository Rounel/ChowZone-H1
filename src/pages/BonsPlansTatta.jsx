import React from 'react';
import {MainLayout, ConfigLayout} from "../layout";
import { items } from '../constants/index.js';

export default function BonsPlansTatta() {
  return (
    <MainLayout>
      <ConfigLayout kindOfConfig="Les Bons Plans de Tatta" configArray={items}/>
    </MainLayout>
  )
}
