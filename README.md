# generate-pem-rsa
Generates PEM with public key RSA

## Installation

```sh
npm i generate-pem-rsa --save
```

## Usage example with ES6

```
import GeneratePem from 'generate-pem-rsa'

const m = 'm82TGkF8XiPLtMHiGy-lt4lkU40DrOdhq0aln718b_jfguMoViP7rS1QoIFPmq-V5RjS4tPoEST05_7bMMQIDjjNjEkSWdkpSpHF-ysDZJfFOB__3IYquEf1-QEcNDD473ij595nbqKe-3noNFUXxfSIJ-NlalMFYcnb-K9Cm9BHM_s2WW9QpzbtI0mbg2JZC5e--PZXXwF1aOmLnDDd_hzJmLmXV88i3qp-S2eX4SwzMkzZ_FixMwWnRtasugJJ-M4u3ETkZZDHZJM_kHbMmipgUNW9MYwwRFQ2WRwODc8uLR6Ll0jN1SHhbVteKplMbwT4a69hRg1EkQxiZ-3SuQ'

const e = 'AQAB'

const pem = new GeneratePem(m,n).pem()

```

## Testing 

```sh
npm run test

```

## Meta

Thais Ribeiro - thaisnribeiro2008@gmail.com
