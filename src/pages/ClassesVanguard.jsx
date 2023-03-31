import React from 'react';
import {MainLayout, ArmesLayout} from "../layout";
import { attirails } from '../constants/index.js';

export default function ClassesVanguard() {
  return (
    <MainLayout>
      <ArmesLayout kindOfClasse="Classes Vanguard" kindOfElement="image" attirailsArray={attirails} />
    </MainLayout>
  )
}
