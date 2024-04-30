import { createSlice } from '@reduxjs/toolkit'
const date = '2024-04-28T19:23:00.251Z'
const initialState = {
  invoiceId: 1,
  saleId: 1,
  salesClass: ['product', 'maintenance', 'service'],
  selesNames: ['screen a51s', 'screen s24 plus'],
  popUpActive: false,
  dateTimeFormat: {
    hourCycle: "h12",
    month: 'short',
    day: 'numeric',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
  },
  invoices: [
    {
      invoiceId: 1,
      clientName: 'zaid fa',
      invoicePrice: 1000,
      invoiceCost: 250,
      profit: 10000,
      salesClassIncluded: ['product', 'maintenance', 'service'],
      sales: [
        {
          saleId: 1,
          saleName: 'Screen A51s',
          salePrice: 4000,
          saleCost: 1000,
          saleClass: 'product',
          saleNote: ''
        },
        {
          saleId: 2,
          saleName: 'Screen A51s',
          salePrice: 4000,
          saleCost: 1000,
          saleClass: 'product',
          saleNote: ''
        },
        {
          saleId: 3,
          saleName: 'Screen A51s',
          salePrice: 4000,
          saleCost: 1000,
          saleClass: '',
          saleNote: ''
        }

      ],
      invoiceCreatedTime: '2024-04-28T19:23:00.251Z'
      

    },
    {
      invoiceId: 2,
      clientName: 'Mohammed',
      invoicePrice: 2000,
      invoiceCost: 2050,
      profit: 20000,
      salesClassIncluded: ['service'],
      sales: [
        {
          saleId: 2,
          saleName: 'Screen A51s',
          salePrice: 4000,
          saleCost: 1000,
          saleClass: 'product',
          saleNote: ''
        }
      ],
      invoiceCreatedTime: '2024-04-28T19:23:00.251Z'

    },
    {
      invoiceId: 3,
      clientName: 'Haider',
      invoicePrice: 10000,
      invoiceCost: 2000,
      profit: 6000,
      salesClassIncluded: ['maintenance'],
      sales: [
        {
          saleId: 2,
          saleName: 'Screen A51s',
          salePrice: 4000,
          saleCost: 1000,
          saleClass: 'product',
          saleNote: ''
        }
      ],
      invoiceCreatedTime: '2024-04-28T19:23:00.251Z'

    },
    {
      invoiceId: 4,
      clientName: 'Jaber',
      invoicePrice: 15000,
      invoiceCost: 4000,
      profit: 1000,
      salesClassIncluded: ['product'],
      sales: [
        {
          saleId: 2,
          saleName: 'Screen A51s',
          salePrice: 4000,
          saleCost: 1000,
          saleClass: 'product',
          saleNote: ''
        },
        {
          saleId: 3,
          saleName: 'Screen A51s',
          salePrice: 4000,
          saleCost: 1000,
          saleClass: 'product',
          saleNote: ''
        },
        {
          saleId: 4,
          saleName: 'Screen A51s',
          salePrice: 4000,
          saleCost: 1000,
          saleClass: 'product',
          saleNote: ''
        },
        {
          saleId: 5,
          saleName: 'Screen A51s',
          salePrice: 4000,
          saleCost: 1000,
          saleClass: 'product',
          saleNote: ''
        }
      ],
      invoiceCreatedTime: '2024-04-28T19:23:00.251Z'

    },
    {
      invoiceId: 5,
      clientName: 'Memo',
      invoicePrice: 15000,
      invoiceCost: 4000,
      profit: 3000,
      salesClassIncluded: ['product', 'maintenance'],
      sales: [
        {
          saleId: 1,
          saleName: 'Screen A51s',
          salePrice: 4000,
          saleCost: 1000,
          saleClass: 'product',
          saleNote: ''
        },
        {
          saleId: 2,
          saleName: 'Screen A51s',
          salePrice: 4000,
          saleCost: 1000,
          saleClass: 'product',
          saleNote: ''
        },
        {
          saleId: 3,
          saleName: 'Screen A51s',
          salePrice: 4000,
          saleCost: 1000,
          saleClass: 'product',
          saleNote: ''
        },
        {
          saleId: 4,
          saleName: 'Screen A51s',
          salePrice: 4000,
          saleCost: 1000,
          saleClass: 'product',
          saleNote: ''
        },
        {
          saleId: 5,
          saleName: 'Screen A51s',
          salePrice: 4000,
          saleCost: 1000,
          saleClass: 'product',
          saleNote: ''
        }
      ],
      invoiceCreatedTime: '2024-04-28T19:23:00.251Z'

    },
    {
      invoiceId: 6234,
      clientName: 'Unknown',
      invoicePrice: 15000,
      invoiceCost: 4000,
      profit: 100000,
      salesClassIncluded: ['product', 'maintenance'],
      sales: [
        {
          saleId: 1,
          saleName: 'Screen A51s',
          salePrice: 4000,
          saleCost: 1000,
          saleClass: 'product',
          saleNote: ''
        },
        {
          saleId: 2,
          saleName: 'Screen A51s',
          salePrice: 4000,
          saleCost: 1000,
          saleClass: 'product',
          saleNote: ''
        },
        {
          saleId: 3,
          saleName: 'Screen A51s',
          salePrice: 4000,
          saleCost: 1000,
          saleClass: 'product',
          saleNote: ''
        },
        {
          saleId: 4,
          saleName: 'Screen A51s',
          salePrice: 4000,
          saleCost: 1000,
          saleClass: 'product',
          saleNote: ''
        },
        {
          saleId: 5,
          saleName: 'Screen A51s',
          salePrice: 4000,
          saleCost: 1000,
          saleClass: 'product',
          saleNote: ''
        }
      ],
      invoiceCreatedTime: '2024-04-28T19:23:00.251Z'

    },
    {
      invoiceId: 7,
      clientName: 'Unknown',
      invoicePrice: 15000,
      invoiceCost: 4000,
      profit: 2000,
      salesClassIncluded: ['product', 'maintenance'],
      sales: [
        {
          saleId: 1,
          saleName: 'Screen A51s',
          salePrice: 4000,
          saleCost: 1000,
          saleClass: 'product',
          saleNote: ''
        },
        {
          saleId: 2,
          saleName: 'Screen A51s',
          salePrice: 4000,
          saleCost: 1000,
          saleClass: 'product',
          saleNote: ''
        },
        {
          saleId: 3,
          saleName: 'Screen A51s',
          salePrice: 4000,
          saleCost: 1000,
          saleClass: 'product',
          saleNote: ''
        },
        {
          saleId: 4,
          saleName: 'Screen A51s',
          salePrice: 4000,
          saleCost: 1000,
          saleClass: 'product',
          saleNote: ''
        },
        {
          saleId: 5,
          saleName: 'Screen A51s',
          salePrice: 4000,
          saleCost: 1000,
          saleClass: 'product',
          saleNote: ''
        }
      ],
      invoiceCreatedTime: '2024-04-28T19:23:00.251Z'

    }, {
      invoiceId: 8,
      clientName: 'Unknown',
      invoicePrice: 15000,
      invoiceCost: 4000,
      profit: 1500,
      salesClassIncluded: ['product', 'maintenance'],
      sales: [
        {
          saleId: 1,
          saleName: 'Screen A51s',
          salePrice: 4000,
          saleCost: 1000,
          saleClass: 'product',
          saleNote: ''
        },
        {
          saleId: 2,
          saleName: 'Screen A51s',
          salePrice: 4000,
          saleCost: 1000,
          saleClass: 'product',
          saleNote: ''
        },
        {
          saleId: 3,
          saleName: 'Screen A51s',
          salePrice: 4000,
          saleCost: 1000,
          saleClass: 'product',
          saleNote: ''
        },
        {
          saleId: 4,
          saleName: 'Screen A51s',
          salePrice: 4000,
          saleCost: 1000,
          saleClass: 'product',
          saleNote: ''
        },
        {
          saleId: 5,
          saleName: 'Screen A51s',
          salePrice: 4000,
          saleCost: 1000,
          saleClass: 'product',
          saleNote: ''
        }
      ],
      invoiceCreatedTime: '2024-04-28T19:23:00.251Z'

    }

  ]
}
const invoiceSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    setPopUpActive: (state, actions) => {
      const statePopUp = actions.payload
      state.popUpActive = statePopUp
    }
  },
})

export const { setPopUpActive } = invoiceSlice.actions
export const invoiceReducer = invoiceSlice.reducer