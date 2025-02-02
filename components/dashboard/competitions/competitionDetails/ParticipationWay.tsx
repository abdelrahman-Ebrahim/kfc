import React from "react";

const authGuidelines = [
  "افتح تطبيق الشركة علي هاتفك.",
  "اذا كنت مستخدماً جديداً, اضغط علي انشاء حساب وأدخل بياناتك (مثل الاسم, البريد الالكتروني, وكلمة المرور)",
  "اذا كنت مسجلاً بالفعل , قم بتسجيل الدخول باستخدام بريدك الالكتروني وكلمة المرور.",
];

const findGuidelines = [
  "بعد تسجيل الدخول, ستجد قسماً مخصصاً للمسابقات. ابحث عن مسابقة السحب الأسبوعية واضغط عليها.",
];
const completingGuidelines = [
  "لزيادة فرصك في الفوز بالسحب, يتطلب منك اتمام عملية شراء من التطبيق بقيمة 50 ريالاً او اكثر.",
  "بعد الشراء, ستتلقي رسالة تؤكد أنك قد ام ادراجك في السحب.",
];

const acceptingGuidelines = [
  "قبل الدخول في السحب, سيطلب منك الموافقة علي الشروط والأحكام. اضغط علي موافق بعد قراءتها",
];

const confirmingGuidelines = [
  "بعد الموافقة علي الشروط, ستظهر رسالة تؤكد أنك تم ادراجك رسمياً في السحب, وسيتم اعلامك بموعد السحب القادم.",
];

const withdrawalGuidelines = [
  "الان عليك فقط انتظار الاعلان عن الفائزين. سيتم ارسال اشعار أو بريد الكتروني في حال فوزك بالجائزة.",
];

const ParticipationWay = () => {
  return (
    <div className="flex flex-col gap-2">
      {/* Auth Guidelines */}
      <p className="text-shadeBlack text-[22px] font-semibold">
        التسجيل أو تسجيل الدخول:
      </p>
      <div>
        <ol className="text-right space-y-2 text-shadeGray list-disc px-4">
          {authGuidelines.map((line, i) => {
            return <li key={i}>{line}</li>;
          })}
        </ol>
      </div>
      {/* Find GuideLines */}
      <p className="text-shadeBlack text-[22px] font-semibold">
        العثور علي المسابقة:
      </p>
      <div>
        <ol className="text-right space-y-2 text-shadeGray list-disc px-4">
          {findGuidelines.map((line, i) => {
            return <li key={i}>{line}</li>;
          })}
        </ol>
      </div>
      {/* Completing Conditions */}
      <p className="text-shadeBlack text-[22px] font-semibold">اكمال الشروط:</p>
      <div>
        <ol className="text-right space-y-2 text-shadeGray list-disc px-4">
          {completingGuidelines.map((line, i) => {
            return <li key={i}>{line}</li>;
          })}
        </ol>
      </div>
      {/* Accepting Conditions */}
      <p className="text-shadeBlack text-[22px] font-semibold">
        الموافقة علي الشروط:
      </p>
      <div>
        <ol className="text-right space-y-2 text-shadeGray list-disc px-4">
          {acceptingGuidelines.map((line, i) => {
            return <li key={i}>{line}</li>;
          })}
        </ol>
      </div>
      {/* Confirming Guidelines */}
      <p className="text-shadeBlack text-[22px] font-semibold">
        تأكيد الاشتراك:
      </p>
      <div>
        <ol className="text-right space-y-2 text-shadeGray list-disc px-4">
          {confirmingGuidelines.map((line, i) => {
            return <li key={i}>{line}</li>;
          })}
        </ol>
      </div>
      {/* Withdrawal Guidelines */}
      <p className="text-shadeBlack text-[22px] font-semibold">انتظار السحب:</p>
      <div>
        <ol className="text-right space-y-2 text-shadeGray list-disc px-4">
          {withdrawalGuidelines.map((line, i) => {
            return <li key={i}>{line}</li>;
          })}
        </ol>
      </div>
    </div>
  );
};

export default ParticipationWay;
