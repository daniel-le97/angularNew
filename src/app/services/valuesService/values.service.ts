import { Injectable } from '@angular/core';
import { api } from 'src/app/lib/utils/axios';
import { Values } from 'src/app/models/values/values';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {
  async get(){
    
  }
  async delete(value: Values){
    const res = await api.delete(`/values${value.number}`)
  }
  async update(value: Values){
    const res = await api.put('/values/' + `${value.number}`)
  }
  async post(value: Values){
    const res = await api.post('/values', value)
  }
}
