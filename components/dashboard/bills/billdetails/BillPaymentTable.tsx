import SubmitButton from "@/components/SharedComponents/SubmitButton";
import Image from "next/image";
import React, { useRef } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface BillsDetailsTable {
  billNumber: string;
  date: string;
  description: string;
  billamount: string;
  paid: string;
}

interface BillsTableProps {
  bills: BillsDetailsTable[];
}

const BillPaymentTable = ({ bills }: BillsTableProps) => {
  const tableRef = useRef<HTMLDivElement>(null);

  // Function to print the table
  const printTable = () => {
    if (tableRef.current) {
      const printContent = tableRef.current.innerHTML;
      const printWindow = window.open("", "_blank");
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>طباعة الفاتورة</title>
              <style>
                body { font-family: Arial, sans-serif; direction: rtl; text-align: right; }
                table { width: 100%; border-collapse: collapse; }
                th, td { border: 1px solid #000; padding: 8px; text-align: center; }
                th { background-color: #E9E9EA; }
              </style>
            </head>
            <body>
              ${printContent}
              <script>
                window.onload = function() { window.print(); window.close(); }
              </script>
            </body>
          </html>
        `);
        printWindow.document.close();
      }
    }
  };

  // Function to fetch and convert font to base64
  const loadFont = async (url: any) => {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const base64String = btoa(
      new Uint8Array(arrayBuffer).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ""
      )
    );
    return base64String;
  };

  // Function to generate and download PDF for a specific bill
  const handleDownload = async (bill: any) => {
    const doc = new jsPDF();

    // Load the Arabic font dynamically
    const fontBase64 = await loadFont("/fonts/NotoSansArabic-Bold.ttf");

    // Add the font to jsPDF
    doc.addFileToVFS("NotoSansArabic-Bold.ttf", fontBase64);
    doc.addFont("NotoSansArabic-Bold.ttf", "NotoSansArabic", "bold");
    doc.setFont("NotoSansArabic", "bold"); // Apply the Arabic font

    // Add the invoice title
    doc.setFontSize(16);
    doc.text("تفاصيل الفاتورة", 105, 20, { align: "center" });

    // Add the table with Arabic text
    autoTable(doc, {
      startY: 30,
      head: [["رقم الفاتورة", "التاريخ", "الوصف", "قيمة الفاتورة", "المدفوع"]],
      body: [
        [
          bill.billNumber,
          bill.date,
          bill.description,
          bill.billamount,
          bill.paid,
        ],
      ],
      styles: { font: "NotoSansArabic", halign: "center" },
    });

    // Save the PDF
    doc.save(`bill_${bill.billNumber}.pdf`);
  };

  return (
    <div className="mt-8">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <p className="text-[#101828] text-lg md:text-[22px] font-semibold">
              قائمة المدفوعات للفاتورة
            </p>
            <SubmitButton
              buttonText="طباعة"
              onClick={printTable}
              fullWidth={false}
              classContainer="bg-white text-shadeGray mt-0 py-2 px-6"
              rightIcon="/printer.svg"
            />
          </div>
          <hr />
        </div>

        {/* INFO TABLE */}
        <div className="overflow-x-auto" ref={tableRef}>
          <table className="w-full border-collapse table-fixed min-w-[1024px]">
            <thead>
              <tr className="bg-[#E9E9EA]">
                {[
                  ".No",
                  "رقم الفاتورة",
                  "التاريخ",
                  "الوصف",
                  "قيمة الفاتورة",
                  "المدفوع",
                  "",
                ].map((header, idx) => (
                  <th
                    key={idx}
                    className={`px-6 py-3 text-[12px] text-shadeGray ${
                      idx === 1 || idx === 2 || idx === 3
                        ? "text-right"
                        : "text-center"
                    } border-b border-[#C6C7CA]`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bills.map((bill, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-[#F9F9FA]"
                  } border-b border-[#C6C7CA] text-sm text-nowrap`}
                >
                  <td className="px-6 py-6 text-center">
                    {String(index + 1).padStart(2, "0")}
                  </td>
                  <td className="px-6 text-right">{bill.billNumber}</td>
                  <td className="px-6 text-right">{bill.date}</td>
                  <td className="px-6 text-right">{bill.description}</td>
                  <td className="px-6 text-center">{bill.billamount}</td>
                  <td className="px-6 text-center">{bill.paid}</td>
                  <td className="px-6 py-6 text-center">
                    <button onClick={() => handleDownload(bill)}>
                      <Image
                        src={"/dashboard/competitions/download-cloud.svg"}
                        alt="download"
                        width={24}
                        height={24}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BillPaymentTable;
