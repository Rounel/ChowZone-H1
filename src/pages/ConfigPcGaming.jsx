import React from 'react';
import {MainLayout, ConfigLayout} from "../layout";
import { items } from '../constants/index.js';

export default function ConfigPcGaming() {
  return (
    <MainLayout>
      <ConfigLayout kindOfConfig="PC Gaming" configArray={items}/>
    </MainLayout>
  )
}
