import { useEffect, useState } from 'react';

import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { nameRegex, phoneRegex } from '../../utils/regex';
import { Form } from '../../components/Form';
import { Input } from '../../components/Input';
import img1 from '../../images/advice.png';

import './Advice.scss';

export const Advice = () => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    console.log('go');
  }

  useEffect(() => {
    resetForm(true);
  }, [resetForm]);

  return (
    <section className='advice' aria-label='Нужна консультация?'>
      <div className='wrapper'>
        <div className='advice__container'>
          <div className='advice__img'>
            <img src={img1} alt='Банка краски и малярная кисть' />
          </div>
          <p className='advice__title'>Нужна консультация?</p>
          <p className='advice__subtitle'>
            Оставьте свои данные, и мы перезвоним вам в ближайшее время
          </p>
          <div className='advice__form'>
            <Form
              name='advice'
              buttonText='Отправить'
              isValid={isValid}
              onSubmit={handleSubmit}
            >
              <Input
                name='name'
                title='Имя'
                type='text'
                minLength='2'
                maxLength='40'
                placeholder='Ваше имя'
                errors={errors}
                values={values}
                handleChange={handleChange}
                pattern={nameRegex.source}
              />
              <Input
                name='phone'
                title='Телефон'
                type='tel'
                minLength='5'
                maxLength='18'
                placeholder='Номер телефона'
                errors={errors}
                values={values}
                handleChange={handleChange}
                pattern={phoneRegex.source}
              />
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};
