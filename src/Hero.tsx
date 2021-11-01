import React, { FC } from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero: FC = () => {
    const { closeSubmenu } = useGlobalContext()

    return <section className="hero" onMouseOver={closeSubmenu}>
        <div className="hero-center">
            <article className="hero-info">
                <h1>Payments infrastructure for the internet</h1>
                <p>
                    Millions of companies of all sizes-from startups to Fortune 500s-use Stripe's software and APIs to accept payments, send payouts,
                    and manage their bussiness online.
                </p>
                <button className="btn">Start now</button>
            </article>
            <article className="hero-images">
                <img src={phoneImg} alt="phone" className="phone" />
            </article>
        </div>
    </section>
}

export default Hero