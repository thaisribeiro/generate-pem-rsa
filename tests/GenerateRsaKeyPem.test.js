import GeneratePem from '../index'

test('Generates PEM with public key RSA', () => {
  const m = 'm82TGkF8XiPLtMHiGy-lt4lkU40DrOdhq0aln718b_jfguMoViP7rS1QoIFPmq-V5RjS4tPoEST05_7bMMQIDjjNjEkSWdkpSpHF-ysDZJfFOB__3IYquEf1-QEcNDD473ij595nbqKe-3noNFUXxfSIJ-NlalMFYcnb-K9Cm9BHM_s2WW9QpzbtI0mbg2JZC5e--PZXXwF1aOmLnDDd_hzJmLmXV88i3qp-S2eX4SwzMkzZ_FixMwWnRtasugJJ-M4u3ETkZZDHZJM_kHbMmipgUNW9MYwwRFQ2WRwODc8uLR6Ll0jN1SHhbVteKplMbwT4a69hRg1EkQxiZ-3SuQ'
  const e = 'AQAB'
  expect(new GeneratePem(m, e).pem()).toBeDefined()
})
