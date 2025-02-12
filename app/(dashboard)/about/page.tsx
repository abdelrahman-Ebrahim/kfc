import PageHeader from "@/components/SharedComponents/PageHeader";
import React from "react";

const Aboutpage = () => {
  return (
    <div className="w-full h-full pb-20 ">
      {/* Page Header */}
      <PageHeader breadcrumbTitle="عن تطبيق اكسب" mainTitle="عن تطبيق اكسب" />

      <div className="mt-8 space-y-5 text-lg text-right text-[#434549] leading-loose">
        <section>
          <h2 className="text-2xl font-semibold  mb-2">
            مرحباً بك في تطبيق أكسب، منصتك الذكية لتنظيم السحوبات والمسابقات!
          </h2>
          <p>
            هل تبحث عن طريقة احترافية، سهلة وشفافة لتنظيم السحوبات والمسابقات؟
          </p>
          <p>
            مع تطبيق أكسب، نقدم لك أداة متكاملة تساعدك على إدارة، تنفيذ، وتحليل جميع أنواع السحوبات والمسابقات بكل سهولة واحترافية.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold  mb-1">
            لماذا تطبيق أكسب؟
          </h2>
          <p>
            نحن نؤمن بالمصداقية والشفافية في نجاح أي مسابقة أو سحب، ولهذا تم تصميم تطبيقنا
            ليمنحك تجربة سلسة وموثوقة. حيث يمكنك تنظيم مسابقاتك
            وفق خطوات بسيطة مع ضمان العدالة التامة في اختيار الفائزين.
          </p>
          <ul className="list-none  mt-1 text-base">
            <li className="relative before:content-['•'] before:absolute before:right-0 before:text-xs before:top-1 before:text-gray-700 pr-4">
              سهل الاستخدام - واجهة مرنة وبديهية
            </li>
            <li className="relative before:content-['•'] before:absolute before:right-0 before:text-xs before:top-1 before:text-gray-700 pr-4">
              شفافية مطلقة - اختيار فائزين تلقائياً وعشوائياً
            </li>
            <li className="relative before:content-['•'] before:absolute before:right-0 before:text-xs before:top-1 before:text-gray-700 pr-4">
              متعدد الخيارات - يدعم مختلف انواع السحوبات والمسابقات
            </li>
            <li className="relative before:content-['•'] before:absolute before:right-0 before:text-xs before:top-1 before:text-gray-700 pr-4">
              تقارير وتحليلات - إحصائيات شاملة لقياس نجاح المسابقة
            </li>
            <li className="relative before:content-['•'] before:absolute before:right-0 before:text-xs before:top-1 before:text-gray-700 pr-4">
              متوافق مع جميع الأجهزة - متاح على الجوال والويب
            </li>
            <li className="relative before:content-['•'] before:absolute before:right-0 before:text-xs before:top-1 before:text-gray-700 pr-4">
              إشعارات فورية - إعلام المشاركين والفائزين فوراً
            </li>
          </ul>

        </section>

        <section>
          <h2 className="text-2xl font-semibold  mb-1">خدماتنا المميزة</h2>
          <ul className="list-none  mt-1 text-base">
            <li className="relative before:content-['•'] before:absolute before:right-0 before:text-xs before:top-1 before:text-gray-700 pr-4">
              تنظيم السحوبات العشوائية - أضف المشاركين ودع النظام يختار الفائز تلقائياً وفق معايير شفافة.
            </li>
            <li className="relative before:content-['•'] before:absolute before:right-0 before:text-xs before:top-1 before:text-gray-700 pr-4">
              إدارة مسابقات السوشيال ميديا - اربط حساباتك على منصات التواصل الاجتماعي وأنشئ مسابقات متفاعلة بسهولة.
            </li>
            <li className="relative before:content-['•'] before:absolute before:right-0 before:text-xs before:top-1 before:text-gray-700 pr-4">
              شفافية مطلقة - اختيار الفائزين تلقائياً وعشوائياً.
            </li>
            <li className="relative before:content-['•'] before:absolute before:right-0 before:text-xs before:top-1 before:text-gray-700 pr-4">
              إنشاء مسابقات مخصصة - حدد القواعد، الجوائز، وشروط المشاركة حسب رغبتك.
            </li>
            <li className="relative before:content-['•'] before:absolute before:right-0 before:text-xs before:top-1 before:text-gray-700 pr-4">
              نظام تتبع المشاركين - راقب التفاعل، عدد المشاركين، ومستوى المشاركة.
            </li>
            <li className="relative before:content-['•'] before:absolute before:right-0 before:text-xs before:top-1 before:text-gray-700 pr-4">
              دعم متكامل - فريقنا متواجد دائماً لضمان تجربة سلسة وناجحة.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold  mb-1">كيف تتواصل معنا؟</h2>
          <ul className="list-none pr- mt-1 text-base ">
            <li className="relative before:content-['•'] before:absolute before:right-0 before:text-xs before:top-1 before:text-gray-700 pr-4">
              البريد الإلكتروني: <span>Info@email.com</span>
            </li>
            <li className="relative before:content-['•'] before:absolute before:right-0 before:text-xs before:top-1 before:text-gray-700 pr-4">
              الموقع الإلكتروني: <span>www.yourwebsite.com</span>
            </li>
            <li className="relative before:content-['•'] before:absolute before:right-0 before:text-xs before:top-1 before:text-gray-700 pr-4">
              حسابات التواصل الاجتماعي: <span>@YourSocialHandle</span>
            </li>
            <li className="relative before:content-['•'] before:absolute before:right-0 before:text-xs before:top-1 before:text-gray-700 pr-4">
              الهاتف: <span>رقم الهاتف</span>
            </li>
          </ul>

        </section>

        <p className=" mt-10">
          انضم إلينا اليوم وابدأ بتنظيم مسابقاتك وسحوباتك بكل سهولة واحترافية!
        </p>
      </div>
    </div>
  );
};

export default Aboutpage;
