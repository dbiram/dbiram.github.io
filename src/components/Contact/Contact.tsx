import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { RiSendPlaneFill } from "react-icons/ri";
import InputField from '../../common/components/InputField/InputField';
import TextAreaField from '../../common/components/TextAreaField/TextAreaField';
import SubmitButton from '../../common/components/SubmitButton/SubmitButton';
import Loader from '../../common/components/Loader/Loader';
import clsx from 'clsx';
import style from './Contact.module.css';

export default function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    React.useEffect(() => {
        const checkScreen = () => {
            setIsSmallScreen(window.innerWidth <= 800);
        };
        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    // Set width for fields and button
    const fieldWidth = isSmallScreen ? '100%' : '700px';
    //const buttonWidth = isSmallScreen ? fieldWidth : '200px';

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(function () {
            if (form.current) {
                emailjs.sendForm('service_1ojiii3', 'template_7ampj23', form.current, '9tVIk-pMvdPICugjF')
                    .then(() => {
                        const target = e.target as HTMLFormElement;
                        (target.elements.namedItem('name') as HTMLInputElement).value = '';
                        (target.elements.namedItem('email') as HTMLInputElement).value = '';
                        (target.elements.namedItem('message') as HTMLTextAreaElement).value = '';
                    });
            }
            setLoading(false);
        }, 2000);
    };

    return (
        <div id='Contact' className={style.contact}>
            <div className={style.container}>
                <h2 className={style.title}>Contact</h2>
                <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
                <form
                    ref={form} onSubmit={sendEmail}
                    className={
                        clsx(
                            { [style['inactive-form']]: loading }
                        )}
                >
                    <InputField
                        width={fieldWidth}
                        height="40px"
                        name="name"
                        placeholder="Enter Your Name"
                        label="Name"
                        type="text"
                    />
                    <InputField
                        width={fieldWidth}
                        height="40px"
                        name="email"
                        placeholder="Enter Your Email"
                        label="Email"
                        type="email"
                    />
                    <TextAreaField
                        width={fieldWidth}
                        height="250px"
                        name="message"
                        placeholder="Enter Your Message"
                        label="Message"
                        type="text"
                    />
                    <SubmitButton
                        icon={<RiSendPlaneFill size="20px" color='white' />}
                        width="200px"
                        height="60px"
                        color="white"
                        backgroundColor="var(--primary-main)"
                    >
                        Submit
                    </SubmitButton>
                    {
                        loading &&
                        <div className={style.loader}>
                            <Loader />
                        </div>
                    }
                </form>
            </div>
        </div>
    );
}
