import { Injectable } from '@angular/core';
import { api } from '../../lib/utils/axios';
import { Account } from '../../models/account';
import {logger} from '../../lib/utils/logger'

@Injectable({
  providedIn: 'root'
})
class AccountService {
  async get(){{
    const response = await api.get<Account>('/example')
    logger.log(response.data)
  }}
}

export const accountService = new AccountService()
