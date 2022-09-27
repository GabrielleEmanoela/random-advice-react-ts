import React, { useEffect } from "react";
import { Card } from "primereact/card";
import * as S from "./styles";
import { RootState } from "../../redux/advice.store";
import {  useSelector } from "react-redux";
import { actionAdvice } from "../../redux/randomAdvice/action";
import { useAppDispatch } from "../../hooks/useAppDispatch";

export const RandomAdvice = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(actionAdvice());
  }, []);

  const advice = useSelector((state: RootState) => state.advice.advice);
  console.log(advice)
  return (
    <S.ContainerAdvice>
      <S.CardAdvice>
        <Card title={advice.id} subTitle={advice.advice}></Card>
      </S.CardAdvice>
    </S.ContainerAdvice>
  );
};
