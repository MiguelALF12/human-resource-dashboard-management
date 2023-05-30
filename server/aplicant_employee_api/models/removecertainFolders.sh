#!/usr/bin/env bash

analyst_api_folder=`ls ../../analyst_api/models`
aplicant_employee=`ls .`

#echo $analyst_api_folder;
#echo $aplicant_employee;

for file_a in $analyst_api_folder; do
 for file_b in $aplicant_employee; do
  echo $file_a $file_b
  if [[ file_a == file_b ]]; then
    rm file_b
  fi
 done
done


echo "Archivos del modelo en aplicant_employee_api compartidos con analyst_api elimnados"
