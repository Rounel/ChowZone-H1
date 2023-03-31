import React from 'react';
import {MainLayout, ConfigLayout} from "../layout";
import { items } from '../constants/index.js';

export default function ConfigPcStreaming() {
  return (
    <MainLayout>
      <ConfigLayout kindOfConfig="PC Streaming" configArray={items}/>
    </MainLayout>
  )
}
