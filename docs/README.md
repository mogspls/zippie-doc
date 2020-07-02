---
title: Zippie for Developers
description: Zippie Pay API Documentation
lang: en-US
---

![Image of Yaktocat](/assets/images/zippie-icon.png)

# Welcome to Zippie Pay Docs!
> These docs will help you to quickly get up and running with the Zippie Pay API. The documentation includes information you need to know about the API as well as detailed examples to quickly get you going

# Introduction
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

## Supported Currencies
Currently, Zippie Pay only supports KSH and EUR currencies.


## Getting Started

You can start collecting payments from customers who use Zippie Wallet, M-Pesa or credit card.

Once your customer taps "Pay" in your webpage or app, a Zippie payment dialogue pops up and guides the customer through the payment process.

You can set up the service in four steps:

1. [Installing the package](#)
2. [Create Forms](#)
3. [Configure Inputs](#)
4. [Call API](#)


### Installation

You can include the Zippie Pay API through the cdn or the npm: 

```html
CDN:

Version 1.0.2
<script src="https://unpkg.com/@zippie/pay-button@1.0.2/dist/zippie-pay.js"></script>

NPM:

npm install @zippie/pay-button

```

### Creating your forms
```html

HTML:

<input type="email" id="zippie_email">
<input type="number" id="zippie_amount">
<button onclick="onBuyClicked()">Submit</button>
```


```vue
VUE: 

<template>
  <div class='container'>
    <form @submit.prevent='submitForm'>
      <input type='email' v-model='zippie_email'>
      <input type='number' v-model='zippie_amount'>
      <input type='submit' value='submit'>Submit</button>	
    </form>
  </div>
<template>

<script>
export default {
  data() {
    return { 
      zippie_email,
      zippie_amount
    }
  },
}
</script>
```

### Configuring your forms
```javascript
function onBuyClicked() {
  // Create a variable array with these parameters
  const paymentData = {
    merchantId: 'YOUR.MERCHANT.ID',
    orderId: 'YOUR_ORDER_ID', // or document.getElementById('zippie_email') if you don't have an orderId
    amount: document.getElementById('zippie_amount').value,
    currency: 'EUR' ,
    email: document.getElementById('zippie_email').value
  }
}
```

```vue
VUE

<script>
Import { PaymentRequest } from ‘@zippie/pay-button’

export default {
  data() {
    return { 
      zippie_email,
      zippie_amount
    }
  },
  methods: {
    submitForm() {
      const paymentData {
        merchantId: 'test.merchant',
        orderId: 'MY_ORDER_ID',
        amount: 1,
        currency: 'KSH',
      }
    }
  }
} 
</script>

```
### Calling the API
```javascript
function onBuyClicked() {
  // Create a variable array with these parameters
  const paymentData = {
    merchantId: 'YOUR.MERCHANT.ID',
    orderId: 'YOUR_ORDER_ID', // or document.getElementById('zippie_email') if you don't have an orderId
    amount: document.getElementById('zippie_amount').value,
    currency: 'EUR' ,
    email: document.getElementById('zippie_email').value
  }

  try {
    // Create a variable that accesses the paymentRequest API, 
    // and call in the variable you set
    const request = zippie.paymentRequest(paymentData)  
    request.show().then(function(result) {
      // Payment successful
      console.log('zippie.paymentRequest result', result)
    }).catch(function(error) {
      // Payment failed (e.g. cancel)
      console.error('zippie.paymentRequest error', error)
    })
  } catch (error) {
    console.error(error.message)
  }
}
```

```vue
VUE

<script>
Import { PaymentRequest } from ‘@zippie/pay-button’

export default {
  data() {
    return { 
      zippie_email,
      zippie_amount
    }
  },
  methods: {
    submitForm() {
      const paymentData {
        merchantId: 'test.merchant',
        orderId: 'MY_ORDER_ID',
        amount: 1,
        currency: 'KSH',
      }

      const request = zippie.paymentRequest(paymentData)
      Request.
        .show()
        .then(function (result) {
          // Payment succesful
       }) 
      .catch(function (error) {
        // Payment failed (e.g. cancel)
      })
    }
  }
} 
</script>

```