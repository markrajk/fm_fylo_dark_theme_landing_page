import React, { useState } from 'react'

import { Container, Typography as T, Button } from '@/components'
import { validateEmail } from '@/utility/email'

import { Wrapper, Content, Input, MessageText } from './style'

const Contact = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState(false)

    const handleInput = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = () => {
        if (validateEmail(email)) {
            setEmail('')
            setError(false)
        } else {
            setError(true)
        }
    }

    return (
        <Wrapper>
            <Container>
                <Content>
                    <T tag="textH4" as="h2">Get early access today</T>
                    <T tag="textBody">
                        It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.
                    </T>
                    <div>
                        <div>
                            <Input onChange={handleInput} type="email" placeholder="example@example.com" value={email} />
                            <MessageText>
                                {error && 'Please provide a valid email address'}
                            </MessageText>
                        </div>
                        <Button onClick={handleSubmit} style={{ width: "100%" }}>Get Started For Free</Button>
                    </div>
                </Content>
            </Container>
        </Wrapper>
    )
}

export default Contact