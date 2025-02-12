"use client";
import CancelButton from "@/components/SharedComponents/CancelButton";
import PageHeader from "@/components/SharedComponents/PageHeader";
import SubmitButton from "@/components/SharedComponents/SubmitButton";
import TextInput from "@/components/SharedComponents/TextInput";

import React from "react";

const ChangePassPage = () => {
    return (
        <div className="w-full h-full pb-20">
            {/* Page Header */}
            <PageHeader
                mainTitle="تغيير كلمة السر "
                breadcrumbTitle="بيانات الشركة"
                badgeText="تغيير كلمة السر"
            />
            <div className="w-full pt-5 pb-5 gap-10 flex ">
                <TextInput
                    label="  كلمة السر القديمة"
                    type="password"

                />
                <TextInput
                    label="كلمة السر الجديدة"
                    type="password"
                />
                <TextInput
                    label="تأكيد كلمة السر"
                    type="password"
                />

            </div>
            <hr />
                    <div className="flex flex-col md:flex-row gap-4 justify-end  ">
                        <CancelButton
                            buttonText=" ألغاء "
                            fullWidth={false}
                            onClick={() => console.log("Clicked!")}
                        />
                        <SubmitButton
                            buttonText="  حفظ التعديلات"
                            fullWidth={false}
                            onClick={() => console.log("Clicked!")}
                        />
                    </div>
        </div>
    );
};

export default ChangePassPage;
