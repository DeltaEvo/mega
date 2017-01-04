import test from 'ava'
import { testBuffer } from './test-utils.js'

import { prepareKey, AES } from '../lib/crypto'

test('stringhash - 8 byte email', t => {
  const derivedKey = prepareKey(testBuffer(8))
  const aes = new AES(derivedKey)

  const emailBuffer = testBuffer(16)
  const hash = aes.stringhash(emailBuffer)
  const hashAsString = hash.toString('hex')

  t.is(hashAsString, '6ba07aca224e84a4')
})

test('stringhash - 32 byte email', t => {
  const derivedKey = prepareKey(testBuffer(8))
  const aes = new AES(derivedKey)

  const emailBuffer = testBuffer(32)
  const hash = aes.stringhash(emailBuffer)
  const hashAsString = hash.toString('hex')

  t.is(hashAsString, '6a1e6c5539c0ed48')
})