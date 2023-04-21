import React from 'react';
import './form.scss';
import { useForm } from "react-hook-form";
import { useState } from 'react';

   function Form (){
      const {
         register,
         handleSubmit,
         formState: { errors }
       } = useForm();
       const [isFormSubmitted, setIsFormSubmitted] = useState(false);
       const onSubmit = (data) => {
         console.log(data);
         setIsFormSubmitted(true);
       };


      return(
         <div className="form-holder">
            <form onSubmit={handleSubmit(onSubmit)} className='form'>
               <div className="form__main">
                  <div className="form__main--name">
                     <input {...register("firstName", {required: true,minLength: 4,pattern: /^[A-Za-z]+$/i})} className="form__name" placeholder='Ім`я та призвіще'/>
                     {errors?.firstName?.type === "required" && <p>Це поле обов'язкове</p>}
                     {errors?.firstName?.type === "minLength" && (
                     <p>Юзернейм повинени містити мінімум 4 символи</p>
                     )}
                     {errors?.firstName?.type === "pattern" && (
                     <p>Тільки букви алфавіту</p>
                     )}
                  </div>
                  <div className="form__main--email">
                     <input {...register("email", {required: true,pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/i})} className="form__email" placeholder='Email'/>
                     {errors?.email?.type === "required" && <p>Це поле обов'язкове</p>}
                     {errors?.email?.type === "pattern" && (
                        <p>Впишіть ваш Email (наприклад:Example@www.com)</p>
                        )}
                  </div>
               </div>
               <div className="form__main--phone">
                  <input {...register("phone", {required: true,pattern: /^\+380\d{9}$/})} className="form__mobile" placeholder='Телефон (у форматі +380)'/>
                     {errors?.phone?.type === "required" && <p>Це поле обов'язкове</p>}
                     {errors?.phone?.type === "pattern" && (
                              <p>Перевір формат номеру телефона</p>
                              )}
               </div>
               <div className="form__main--text">
                  <input {...register("text", {pattern: /^\+380\d{9}$/})} className="form__text" placeholder='Повідомлення'/>
                  {errors?.text?.type === "minLength" && (
                     <p>Повідомлення має бути не менш 10 символів</p>
                     )}
               </div>
               <div className="form__answer">
                  <input id='checkbox' type="checkbox" className='form__checkbox'/>
                  <span>Надсилати мені оновлення про академію.</span>
               </div>
            <button type='submit' className='form__button'>Надіслати</button>
            </form>
            {isFormSubmitted && <p className='accepted'>Ваш запит було надіслано!</p>}
         </div>
      )
   }

   export default Form;