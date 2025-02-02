import { RadioGroup, FormControlLabel, Radio, Typography, Box } from "@mui/material";
import { FileUpload } from "@/components/AuthComponents/RegisterComponents/FileUpload";
import TextInput from "@/components/SharedComponents/TextInput";

interface NewCompetitionMainInfoProps {
  chamberOptions: string[];
  cityOptions: string[];
  selectedOption: string;
  room: string;
  city: string;
  competitionNameEn: string;
  competitionNameAr: string;
  onSelectedOptionChange: (value: string) => void;
  onRoomChange: (value: string) => void;
  onCityChange: (value: string) => void;
  onCompetitionNameEnChange: (value: string) => void;
  onCompetitionNameArChange: (value: string) => void;
}

const NewCompetitionMainInfo: React.FC<NewCompetitionMainInfoProps> = ({
  chamberOptions,
  cityOptions,
  selectedOption,
  room,
  city,
  competitionNameEn,
  competitionNameAr,
  onSelectedOptionChange,
  onRoomChange,
  onCityChange,
  onCompetitionNameEnChange,
  onCompetitionNameArChange,
}) => {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* Form title header */}
      <div className="flex flex-col items-start justify-center gap-4 w-full">
        <h2 className="text-2xl font-semibold text-shadeBlack">
          البيانات الرئيسية
        </h2>
        <hr className="w-full" />
      </div>

      {/* Form radio group */}
      <div className="flex flex-col items-start justify-center w-full lg:w-[95%] xl:w-full">
        <p className="text-base font-semibold text-shadeBlack mb-3">
          قم بتحديد مكان انشاء المسابقة:
        </p>
        <RadioGroup
          value={selectedOption}
          onChange={(e) => onSelectedOptionChange(e.target.value)}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: { xs: "column", lg: "row" }, // Column on small screens, row on large screens
            gap: "16px",
            width: "100%",
          }}
        >
          {[
            {
              value: "platform",
              title: "منصة أكسب",
              description:
                "نص مؤقت يوضح أن المستخدم سيقوم باختيار الاشتراك عن طريق منصة أكسب.",
            },
            {
              value: "external",
              title: "منصة خارجية",
              description:
                "نص مؤقت يوضح أن المستخدم سيقوم باختيار الاشتراك عن طريق منصة خارجية.",
            },
          ].map((option) => (
            <Box
              key={option.value}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "8px",
                padding: "16px",
                border:
                  selectedOption === option.value
                    ? "2px solid #3454B4"
                    : "1px solid #C6C7CA",
                borderRadius: "8px",
                backgroundColor:
                  selectedOption === option.value ? "#D9E1F9" : "#ffffff",
                boxShadow:
                  selectedOption === option.value
                    ? "0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814"
                    : "0px 1px 2px 0px #1018280D",
                width: { xs: "100%", lg: "calc(50% - 8px)" }, // Responsive width
              }}
            >
              <FormControlLabel
                value={option.value}
                control={<Radio />}
                label={
                  <Typography
                    sx={{
                      fontSize: "22px",
                      fontWeight: "medium",
                      color:
                        selectedOption === option.value ? "#0D152D" : "#434549",
                    }}
                  >
                    {option.title}
                  </Typography>
                }
                sx={{ margin: 0 }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: "#434549",
                  paddingInline: "16px",
                  paddingBottom: "16px",
                  fontSize: "14px",
                }}
              >
                {option.description}
              </Typography>
            </Box>
          ))}
        </RadioGroup>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-6 w-full lg:w-[95%] xl:w-full">
        {/* Form file uploader */}
        <div className="flex flex-col justify-center items-center gap-4 py-10 px-12 bg-white rounded-xl border border-[#E9E9EA] min-w-[350px] max-h-[200px] w-full lg:max-w-[350px]">
          <p className="text-[22px] font-medium text-black">شعار المسابقة</p>
          <FileUpload
            label={""}
            classContainer="flex-col border-none p-0"
            textClass="text-center items-center"
          />
        </div>

        {/* Form main information fields */}
        <div className="flex flex-col gap-4 justify-start items-start w-full">
          <div className="flex items-center gap-6 w-full">
            <TextInput
              label="اختر الغرفة التجارية"
              type="text"
              value={room}
              onChange={(e) => onRoomChange(e.target.value)}
              options={chamberOptions}
              required
            />
            <TextInput
              label="اختر المدينة"
              type="text"
              value={city}
              onChange={(e) => onCityChange(e.target.value)}
              options={cityOptions}
              required
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-4 w-full">
            <TextInput
              label="أسم المسابقة (إنجليزي)"
              type="text"
              value={competitionNameEn}
              onChange={(e) => onCompetitionNameEnChange(e.target.value)}
              required
            />
            <TextInput
              label="أسم المسابقة (عربي)"
              type="text"
              value={competitionNameAr}
              onChange={(e) => onCompetitionNameArChange(e.target.value)}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCompetitionMainInfo;
