import React from 'react'

import { Container, Feature, Typography as T } from '@/components'

import { Wrapper } from './style'

const Features = () => {
    return (
        <Container>
            <Wrapper>
                <Feature icon="access-anywhere">
                    <T tag="textH4" as="h2">Access your files, anywhere</T>
                    <T tag="textBody">The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</T>
                </Feature>
                <Feature icon="security">
                    <T tag="textH4" as="h2">Security you can trust</T>
                    <T tag="textBody">2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</T>
                </Feature>
                <Feature icon="collaboration">
                    <T tag="textH4" as="h2">Real-time collaboration</T>
                    <T tag="textBody">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</T>
                </Feature>
                <Feature icon="any-file">
                    <T tag="textH4" as="h2">Store any type of file</T>
                    <T tag="textBody">Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</T>
                </Feature>
            </Wrapper>
        </Container>

    )
}

export default Features