import SubmitButton from "@/components/SharedComponents/SubmitButton";
import React from "react";

type CardProps = {
    title: string;
    children: React.ReactNode;
    className :string;
};

const Card: React.FC<CardProps> = ({ title, children, className }) => {
    return (
        <div className={`bg-white shadow-md rounded-lg p-4 flex-1 text-[#434549] ${className}`}>
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl font-bold">{title}</h2>
                <button className="text-gray-500 text-2xl hover:text-gray-700" style={{ writingMode: "vertical-lr" }}>...</button>
            </div>
            {children}
        </div>
    );
};

const Dashboard: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 p-4">
        <Card title="عدد الفرص المتبقية" className="md:col-start-1 md:row-start-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-3xl font-bold">50,245 فرصة</h3>
            </div>
            <div className="w-24 h-24">
              <svg viewBox="-4 0 46 36" className="w-full h-full">
                <path
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#D9E1F9"
                  strokeWidth="7"
                />
                <path
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831"
                  fill="none"
                  stroke="#3454B4"
                  strokeWidth="7"
                  strokeDasharray="75, 100"
                />
              </svg>
            </div>
          </div>
        </Card>
        <Card title="أماكن المشاركة" className="md:col-start-2 md:row-start-1 md:row-span-2">
  <div className="space-y-3 pt-5 ">
    {[
      { name: "فرع الرياض", value: 68 },
      { name: "فرع جدة", value: 40 },
      { name: "فرع الدمام", value: 31 },
      { name: "فرع أبها", value: 25 },
    ].map((item, index, array) => (
      <div key={index}>
        <div className="flex flex-col ">
          <span className=" text-black font-bold ">{item.name}</span>
          <div className=" flex items-center mt-1">
            <span className="w-1/3 text-sm">عدد المشاركات</span>
          <div className="w-full flex items-center">
            <div className="bg-gray-200 h-1 w-full rounded-full overflow-hidden">
              <div
                className="bg-yellow-500 h-full"
                style={{ width: `${item.value}%` }}
              ></div>
            </div>
            <span className="ml-2 text-sm text-gray-500">{item.value}%</span>
          </div>
          </div>
        </div>
        {/* إضافة خط فاصل إذا لم يكن العنصر الأخير */}
        {index < array.length - 1 && <hr className=" border-gray-300 mt-1" />}
      </div>
    ))}
  </div>
</Card>

      
        <Card title="آخر المسابقات" className="md:col-start-3 md:row-start-1 md:row-span-2 ">
          <div className="flex flex-col items-center mt-20 ">
            <p className="text-black text-xl font-bold mb-2">
              لا يوجد لديك مسابقات للعرض
            </p>
            <p className="text-sm">قم بإضافة مسابقاتك و تابع تفاعل العملاء لديك</p>
            <SubmitButton
       buttonText=" إضافة مسابقة جديدة"
       fullWidth={false}
       rightIcon="/dashboard/competitions/add.svg" 
       type="submit"
       classContainer="w-52"
       />
          </div>
        </Card>
      
        <Card title="عدد المشاركين" className="md:col-start-1 md:row-start-2">
          <div className="flex items-center justify-between">
            <div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-[8px] h-[8px] rounded-full bg-blue-600 mr-2"></span>
                  <span className="text-gray-600 mr-2">مشارك بالمجان</span>
                  <span className="font-bold text-2xl mr-2">157K</span>
                </li>
                <li className="flex items-center">
                  <span className="w-[8px] h-[8px] rounded-full bg-yellow-600 mr-2"></span>
                  <span className="text-gray-600 mr-2">مشارك مدفوع</span>
                  <span className="font-bold text-2xl mr-2">38K</span>
                </li>
              </ul>
            </div>
            <div className="w-24 h-24">
              <svg viewBox="-4 0 46 36" className="w-full h-full">
                <path
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#3454B4"
                  strokeWidth="7"
                />
                <path
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831"
                  fill="none"
                  stroke="#CC9C00"
                  strokeWidth="7"
                  strokeDasharray="85, 100"
                />
              </svg>
            </div>
          </div>
        </Card>
      </div>
      
    );
};

export default Dashboard;
