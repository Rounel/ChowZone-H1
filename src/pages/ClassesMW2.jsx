import React from 'react';
import {MainLayout, ArmesLayout} from "../layout";
import { attirails } from '../constants/index.js';

export default function ClassesMW2() {
  return (
    <MainLayout>
      <ArmesLayout kindOfClasse="Classes MWII" kindOfElement="Vidéo" attirailsArray={attirails} />
    </MainLayout>
  )
}