import TabSwitch from "@/components/SharedComponents/TabSwitch";
import React, { useState } from "react";

const NewCompetitionTerms = () => {
  const arabicTerms = [
    "لا يشترط الشراء للدخول في المسابقة.",
    "تخضع شروط المسابقة للقوانين والأنظمة الجارية في المملكة العربية السعودية.",
    "لا يحق لموظفي الغرف التجارية وعائلاتهم من الدرجة الاولي المشاركة في المسابقات.",
    "لا يحق لموظفي الشركة المشغلة للنظام وعائلاتهم من الدرجة الاولي المشاركة في المسابقات.",
    "لا يحق لموظفي وكالة الاعلان والدعاية وعائلاتهم من الدرجة الاولي المشاركة في المسابقات.",
    "لا يحق لموظفي الشركة صاحبة المسابقة وعائلاتهم من الدرجة الاولي المشاركة في المسابقة الخاصة بها.",
    "لا يحق لموظفي المراكز التجارية المشاركة وعائلاتهم من الدرجة الاولي المشاركة في المسابقة الخاصة بها",
    "يجب ان يكون الاسم مطابق للهوية النظامية المعمول بها في المملكة العربية السعودية.",
    "في حال تبين أكثر من حساب لشخص واحد فسوف يتم الغاء جميع الحسابات بلا استثناء بما فيها الحساب الرئيسي وذلك لبيان تحايله علي الأنظمة وسيحرم من جميع الجوائز التي ربحها تحت هذه الحسابات",
    "للمقيمين في المملكة العربية السعودية كتابة الاسم بالكامل باللغة العربية كما هو موجود في الهوية النظامية (الهوية الوطنية, الهويةالخليجية, هوية مقيم, هوية زائر, جواز السفر).",
    "يجب علي جميع الفائزين ان تكون الهوية سارية المفعول عند استلام الجائزة.",
    "تغيير بيانات حساب قام بالمشاركة في مسابقة لم يتم السحب عليها بعد, يحرم صاحبه من الفوز فيها حتي وان فاز.",
    "في حال لم يتطابق اسم الفائز مع الاسم الموجود بالهوية النظامية المعتمدة في المملكة العربية السعودية يتم استبعاده واعادة السحب مرة اخري.",
    "تعبئة الاقرار ببيانات صحيحة حسب الهوية النظامية (الهوية الوطنية, الهوية الخليجية, هوية زائر, جواز السفر) والمرسل من قبل نظام (eCopon) الي جوال الفائز علي شكل رابط.",
    "قراءة (بطاقة استلام جائزة) المنشأة من نظام (eCopon) من قبل الشركة المنظمة للمسابقة يعد اقرارا من قبل الفائز باستلام الجائزة.",
    "يحق لشركة الارتباط الذكي لتقنية المعلومات المحدودة (eCopon) رفع دعوي تحايل علي الأشخاص الذين قاموا بتعبئة نموذج الاقرار ببيانات غير صحيحة ولا تطابق الهوية النظامية (الهوية الوطنية, الهوية الخليجية, هوية زائر, جوازالسفر).",
    "الدخول في المسابقة يعد موافقة ضمنية لشروطها وأحكامها.",
    "شركة الارتباط الذكي لتقنية المعلومات المحدودة (eCopon) هي شركة مشغلة لنظام المسابقات فقط, ليس لهاأي صلاحية علي نوع أو كمية الجوائز أو تسليمها أو استبدالها وانما يتم ذلك عن طريق الشركة أوالجهةراعية المسابقة أو المنظمة لها.",
    "شركة الارتباط الذكي لتقنية المعلومات المحدودة (eCopon) هي شركة مشغلة لنظام المسابقات فقط, ليس لها أي علاقة في حال أخل احد الطرفين باي بند من بنود استلام (الفائز) أو تسليم (المنشأة) الجائزة",
    "أبل ليست مسئولة عن أي مسابقة من هذه المسابقات والمتواجة في نظام وتطبيق eCopon, وانه ليس لها اي علاقة باي شكل من الاشكال بهذه المسابقات.",
  ];

  const englishTerms = [
    "Purchase is not required to enter the competition.",
    "The competition terms are subject to the laws and regulations currently in force in the Kingdom of Saudi Arabia.",
    "Employees of the Chambers of Commerce and their immediate family members are not eligible to participate in the competition.",
    "Employees of the system-operating company and their immediate family members are not eligible to participate in the competition.",
    "Employees of the advertising agency and their immediate family members are not eligible to participate in the competition.",
    "Employees of the company hosting the competition and their immediate family members are not eligible to participate in its competition.",
    "Employees of commercial centers and their immediate family members are not eligible to participate in the competition of the center.",
    "The name must match the official identity document used in the Kingdom of Saudi Arabia.",
    "If more than one account is found for an individual, all accounts will be canceled without exception, including the primary account, due to an attempt to bypass the system, and they will be disqualified from all prizes won through these accounts.",
    "Residents of Saudi Arabia must write their full name in Arabic as shown in the official identity document (National ID, Gulf ID, Resident ID, Visitor ID, or Passport).",
    "All winners must have a valid identity document at the time of receiving the prize.",
    "Changing account details for an account that has entered a competition that has not yet been drawn will disqualify the owner of the account from winning, even if they are selected.",
    "If the winner's name does not match the name on the approved official identity document in the Kingdom of Saudi Arabia, they will be disqualified, and a new draw will be conducted.",
    "Filling out the declaration with correct data as per the official identity document (National ID, Gulf ID, Visitor ID, or Passport) sent by the (eCopon) system to the winner's mobile phone as a link.",
    "Reading the (Prize Receipt Card) issued by the (eCopon) system by the company organizing the competition is considered acknowledgment by the winner of receiving the prize.",
    "Smart Link IT Ltd. (eCopon) reserves the right to file fraud claims against individuals who filled out the declaration with false information that does not match the official identity document (National ID, Gulf ID, Visitor ID, or Passport).",
    "Entering the competition constitutes implicit agreement to its terms and conditions.",
    "Smart Link IT Ltd. (eCopon) is solely an operator of the competition system and has no authority over the type, quantity, delivery, or replacement of prizes. These matters are handled solely by the sponsoring or organizing entity of the competition.",
    "Smart Link IT Ltd. (eCopon) has no involvement if either party breaches any terms regarding the winner receiving the prize or the organizer delivering it.",
    "Apple is not responsible for any competition displayed on the eCopon system or application, and it has no connection whatsoever with these competitions.",
  ];

  const tabs = ["العربية", "English"];
  // State for active tab
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* Terms Header */}
      <div className="flex flex-col items-start gap-4 mb-6">
        <h2 className="text-sm sm:text-2xl font-semibold text-shadeBlack">
          الشروط والأحكام الخاصة بالمسابقة
        </h2>
        <hr className="w-full border-gray-300" />
      </div>
      {/* Term and Conditions container */}
      <div className="p-6 bg-[#F4F4F4] rounded-lg">
        <div className="p-6 bg-[#F9F9FA] rounded-2xl w-full max-h-[383px] shadow-navbar-shadow overflow-y-scroll scrollbar-hide">
          <TabSwitch
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          {/* Terms List */}
          <div>
            <ol
              className={`${
                activeTab === 0 ? "text-right" : "text-left"
              } space-y-1 text-shadeGray font-medium list-decimal px-4`}
              style={
                activeTab === 1
                  ? { direction: "ltr", listStylePosition: "inside" }
                  : {}
              }
            >
              {(activeTab === 0 ? arabicTerms : englishTerms).map(
                (term, index) => (
                  <li key={index} className="leading-6">
                    {term}
                  </li>
                )
              )}
            </ol>
          </div>
        </div>
        {/* Accept Terms Checkbox */}
        <div className="mt-6 flex items-center gap-2">
          <input
            type="checkbox"
            id="acceptTerms"
            className="w-4 h-4 border-shadeGray rounded-md"
          />
          <label htmlFor="acceptTerms" className="text-shadeGray text-sm">
            أوافق على كافة الشروط و الأحكام.
          </label>
        </div>
      </div>
    </div>
  );
};

export default NewCompetitionTerms;
