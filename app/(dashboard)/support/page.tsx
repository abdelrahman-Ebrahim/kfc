'use client'
import PageHeader from "@/components/SharedComponents/PageHeader";
import SubmitButton from "@/components/SharedComponents/SubmitButton";
import TextInput from "@/components/SharedComponents/TextInput";
import React, { useState } from "react";



const SupportPage = () => {
  
  return (
    <div className="w-full h-full pb-20">
      {/* Page Header */}
      <PageHeader
      breadcrumbTitle="الدعم"
      mainTitle="الدعم"
    />
      <form className="w-full mx-auto p-6 mt-7 rounded-lg border-2">

      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-7">
        <TextInput
          type="text"
          options={["الكل", "نوع 1", "نوع 2"]}
        />
    
        <TextInput
          label=" تفاصيل المشكلة"
          type="texttree"
          options={["جدة", "الرياض", "مكة"]}
        />
       
      </div>

      <hr className="font-bold trxe-[10px]" />

      
      <div className="flex  flex-col md:flex-row  justify-end ">
     
        <SubmitButton
         buttonText=" ارسال"
         type="submit"
         classContainer="w-[240px]"
         />
       
          
      </div>
    </form>
    </div>
  );
};

export default SupportPage;


