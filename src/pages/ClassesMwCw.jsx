import React from 'react';
import {MainLayout, ArmesLayout} from "../layout";
import { attirails } from '../constants/index.js';

export default function ClassesMwCw() {
  return (
    <MainLayout>
      <ArmesLayout kindOfClasse="Classes MW / CW" kindOfElement="vidéo" attirailsArray={attirails} />
    </MainLayout>
  )
}
