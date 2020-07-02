---
title: Zippie for Developers
description: Zippie Pay API Documentation
lang: en-US
---

# Introduction

## Getting Started

You can start collecting payments from customers who use Zippie Wallet, M-Pesa or credit card.

Once your customer taps "Pay" in your webpage or app, a Zippie payment dialogue pops up and guides the customer through the payment process.

You can set up the service in four steps:

1. [Installing the package](#)
2. [Create Forms](#)
3. [Configure Inputs](#)
4. [Call API](#)

### HTML
#### CDN

```HTML
<script src="https://unpkg.com/@zippie/pay-button@1.0.2/dist/zippie-pay.js"></script>
```

#### Creating your form

Create your elements for collecting user's email and amount

You're free to identify the elements by any means you want. In the example below we use an ID.

```HTML
<input type="email" id="zippie_email">
<input type="number" id="zippie_amount">
<button onclick="onBuyClicked()">Submit</button>
```





### VueJS
