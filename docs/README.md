---
title: Zippie for Developers
description: Zippie Pay API Documentation
lang: en-US
---

![Zippie Icon](/assets/images/zippie-icon.png)


# Introduction

* Welcome to the Zippie API Documentation *

These docs will help you to quickly get up and running with the Zippie Pay API. The documentation includes information you need to know about the API as well as detailed examples to quickly get you going

## Supported Currencies

Zippie only currently supports 2 currencies at the moment.

- Kenyan shillings (KSH)
- Euros (EUR)

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

:::: tabs cache-lifetime="10" :options="{ useUrlFragment: false }"

::: tab CDN id="cdn"

Include the CDN tag to your markup, preferably at the footer
```HTML
<script src="https://unpkg.com/@zippie/pay-button@1.0.2/dist/zippie-pay.js"></script>

```
:::


::: tab NPM id="npm"
```bash
npm install @zippie/pay-button
```
:::

::::

### Creating your forms

:::: tabs cache-lifetime="10" :options="{ useUrlFragment: false }"

::: tab HTML/CSS/JavaScript id="html" 

```HTML
<input type="email" id="zippie_email">
<input type="number" id="zippie_amount">
<button onclick="onBuyClicked()">Submit</button>
```
:::


::: tab Vue id="vue"
```HTML
<template>
  <div class='container'>
    <form @submit.prevent='submitForm'>
        <input type='email' v-model='zippie_email'>
        <input type='number' v-model='zippie_amount'>
        <button type='submit' value='submit'>Submit</button>	
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
:::

::::


### Configuring your forms

:::: tabs cache-lifetime="10" :options="{ useUrlFragment: false }"

::: tab HTML/CSS/JavaScript id="HTML"

Create a function for the ``<button>`` element and then create a variable with the following inputs:

```HTML
<script>
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
</script>
```

:::

::: tab Vue id="vue"

```html
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
:::

##### Parameters

**merchantId** [string]

Zippie will provide you a unique merchant ID which you insert here. If you don't have a merchantID yet, contact your Zippie support person.

**orderId** [string]

An Order ID is a unique number which you'll need to identify and track your orders. If you don't have an orderId, you may use the customer's email address.

**amount** [string]

You could enter any amount you wish.

**email** [string]

The customer's email. *(Please do not enter your own email, as this will be charged on you)*


::::

### Calling the API


:::: tabs cache-lifetime="10" :options="{ useUrlFragment: false }"

::: tab HTML id="html"

```Javascript
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
:::


::: tab Vue id="vue"
```vue
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
:::

::::

## Webhooks

Webhooks is a combination of elements that create a notification and reaction system within a larger integration.

Webhooks are coded like a phone number that Stripe calls to notify you of any activity in your Stripe account, i.e. creation of a new customer, or a payout of funds to your bank account. The webhook endpoint is controlled by a person answering that call who takes action based upon the specific information it receives.

The webhook endpoint is just more code on your server, which can be written in Ruby, PHP, or Node.js. It also has an associated URL (e.g., https://example.com/webhooks). 

The Stripe notifications are called Event objects. An Event object contains all details regarding any recent activity on your account, including the type of event and the data associated with the event. The webhook endpoint uses the event object's details to take any required action, such as indicating that an order should be fulfilled.