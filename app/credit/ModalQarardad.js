"use client";

import { useDispatch, useSelector } from "react-redux";
import { showActions } from "@/lib/slices/OfCan";
import Modal from "@/Components/Common/Modal";

export default function ModalQarardad() {
  const showStatus = useSelector((state) => state.Show.showStatus);
  const dispatch = useDispatch();

  const cssClass =
    "transform no-scrollbar text-green-950 bg-white rounded-xl pb-3 fixed backdrop:backdrop-blur-md bottom-0 left-0 right-0 z-40 w-full px-2 h-[470px] overflow-y-auto transition-transform duration-300";
      function handleHide() {
        dispatch(showActions.status(null));
      }
  return (
    <Modal open={showStatus === "qarardadModal"}>
      {" "}
      <div className="bg-slate-200 border-b w-1/3 min-w-72 fixed flex justify-between py-2 px-4 rounded-t-xl">
        <p>قرارداد دریافت اعتبار</p>
        <div onClick={handleHide} id="creditConfirmTermsMobileCloseButton" className="flex items-center">
          <svg
            className="w-4 h-4 fill-black cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000"
            viewBox="0 0 384 512"
          >
            <path d="M378.4 71.4c8.5-10.1 7.2-25.3-2.9-33.8s-25.3-7.2-33.8 2.9L192 218.7 42.4 40.6C33.9 30.4 18.7 29.1 8.6 37.6S-2.9 61.3 5.6 71.4L160.7 256 5.6 440.6c-8.5 10.2-7.2 25.3 2.9 33.8s25.3 7.2 33.8-2.9L192 293.3 341.6 471.4c8.5 10.1 23.7 11.5 33.8 2.9s11.5-23.7 2.9-33.8L223.3 256l155-184.6z"></path>
          </svg>
        </div>
      </div>
      <div className="bg-white h-full pb-10 overflow-auto no-scrollbar mt-8">
        <div className="p-3">
          <h3 className=" text-base text-black">تعاریف و اصطلاحات</h3>
          <p className="text-slate-700 text-justify text-sm font-extralight leading-7">
            شرکت: منظور شرکت پردازش اطلاعات مالی اهرم به شماره ثبت 42450 نزد
            مرجع ثبت شرکت‌ها می‌باشد.
          </p>
          <p className="text-slate-700 text-justify text-sm font-extralight leading-7">
            اعتبار دهنده: منظور شرکت پردازش اطلاعات مالی اهرم است.
          </p>
          <p className="text-slate-700 text-justify text-sm font-extralight leading-7">
            مشتری: منظور اعتبار گیرنده و استفاده کننده از خدمات شرکت می‌باشد.
          </p>
          <p className="text-justify text-sm font-extralight leading-7">
            سرمایه‌گذار: منظور مشتری است که قصد سرمایه‌گذاری در صندوق‌ها را
            دارد.
          </p>
          <p className="text-justify text-sm font-extralight leading-7">
            صندوق‌: منظور صندوق‌های سرمایه‌گذاری ارائه شده توسط شرکت می‌باشد.
          </p>
          <p className="text-justify text-sm font-extralight leading-7">
            واحد‌های سرمایه‌گذاری: کوچک‌ترین جزء یک صندوق سرمایه‌گذاری می‌باشد.
          </p>
          <p className="text-justify text-sm font-extralight leading-7">
            ریال: منظور واحد پول رایج جمهوری اسلامی ایران می‌باشد.
          </p>
          <p className="text-justify text-sm font-extralight leading-7">
            بازپرداخت: منظور مبلغی است که اعتبار گیرنده پس از دریافت اعتبار باید
            به اعتبار دهنده پرداخت کند.
          </p>
          <p className="text-justify text-sm font-extralight leading-7">
            نشانی اینترنتی: منظور آدرس سایت به نشانی www.ahrominvest.ir می‌باشد.
          </p>
          <p className="text-justify text-sm font-extralight leading-7">
            سرمایه‌گذار: منظور مشتری است که قصد سرمایه‌گذاری در صندوق‌ها را
            دارد.
          </p>
          <p className="text-justify text-sm font-extralight leading-7">
            مرجع ثبت شرکت‌ها: بخشی از سازمان ثبت اسناد و املاک کشور است که وظیفه
            تأسیس شرکت‌ها را بر عهده دارد.
          </p>
          <p className="text-justify text-sm font-extralight leading-7">
            مراجع قضایی: منظور مراجع قضایی مطابق قوانین جمهوری اسلامی ایران
            می‌باشد.
          </p>

          <h3 className=" text-base text-black">
            ماده 1 – طرفین قرارداد
          </h3>
          <p className="text-justify text-sm font-extralight leading-7">
            این قرارداد بین شرکت پردازش اطلاعات مالی اهرم با شناسه ملی
            14011066499 و شماره ثبت 42450 به نمایندگی آقای علی فیلی زاده با سمت
            مدیرعامل و آدرس البرز، کرج، میدان توحید، بلوار بلال، ساختمان،
            پارسیان، طبقه 4، واحد 22 که از این پس اعتبار‌دهنده یا شرکت نامیده
            می‌شود و اعتبار گیرنده که از این پس مشتری نامیده می‌شود می‌باشد.
          </p>
          <h3 className=" text-base text-black">
            ماده 2 – موضوع قرارداد
          </h3>
          <p className="text-justify text-sm font-extralight leading-7">
            موضوع قرارداد عبارت است از تخصیص اعتبار از اعتبار‌دهنده به مشتری به
            منظور خرید صندوق‌های سرمایه‌گذاری که توسط شرکت پردازش اطلاعات مالی
            اهرم ارائه می‌شود.
          </p>
          <p className="text-justify text-sm font-extralight leading-7">
            <span className=" text-black">تبصره</span>: اعتبار تخصیص یافته
            توسط اعتبار‌دهنده به موجب این قرارداد به مشتری، صرفاً قابل استفاده
            برای خرید صندوق های سرمایه‌گذاری خواهد بود و به هیچ وجه به صورت نقد
            به حساب بانکی مشتری منظور نخواهد شد.
          </p>
          <h3 className=" text-base text-black">ماده 3 – مدت قرارداد</h3>
          <p className="text-justify text-sm font-extralight leading-7">
            این قرارداد از تاریخ امضاء توسط طرفین به مدت نامحدود اعتبار دارد.
          </p>
          <p className="text-justify text-sm font-extralight leading-7">
            <span className=" text-black">تبصره</span>: چنانچه قرارداد فسخ
            یا منفسخ گردد، مشتری باید حداکثر سه روز کاری پس از تاریخ فسخ یا
            انفساخ، نسبت به بازپرداخت کلیه بدهی‌های ناشی از این قرارداد به
            اعتبار‌دهنده اقدام نماید.
          </p>
          <h3 className=" text-base text-black">
            ماده 4 – شیوه استفاده از اعتبار
          </h3>
          <p className="text-justify text-sm font-extralight leading-7">
            مشتری پس از دریافت اعتبار می‌تواند در صندوق‌های سرمایه‌گذاری که توسط
            اعتبار‌دهنده ارائه می‌شود شروع به معامله و سرمایه‌گذاری کند.
          </p>
          <p className="text-justify text-sm font-extralight leading-7">
            <span className=" text-black">تبصره1</span>: امکان خرید
            واحد‌های صندوق الماس در طرح اعتباری وجود ندارد.
          </p>
          <p className="text-justify text-sm font-extralight leading-7">
            <span className=" text-black">2تبصره</span>: اعتباردهنده
            هیچ‌گونه مسئولیتی درقبال ضرر و زیان سرمایه‌گذاران ندارد.
          </p>
          <h3 className=" text-base text-black">
            ماده 5 – میزان اعتبار دریافتی
          </h3>
          <p className="text-justify text-sm font-extralight leading-7">
            مبلغ اعتبار دریافتی توسط مشتری مشخص می‌شود و مشتری موظف است این رقم
            را با توجه به تعداد اقساط انتخاب شده توسط خود مشتری به اعتبار دهنده
            پرداخت کند.
          </p>
          <h3 className=" text-base text-black">
            ماده 6 – بازپرداخت اعتبار دریافتی
          </h3>
          <p className="text-justify text-sm font-extralight leading-7">
            مشتری موظف است از یک ماه بعد از تاریخ ثبت درخواست اعتبار اقساط
            اعتبار درخواستی خود را به اعتبار‌دهنده از راه‌های اعلام شده در ماده
            7 پرداخت کند.
          </p>
          <p className="text-justify text-sm font-extralight leading-7">
            <span className=" text-black">تبصره 1</span>: امکان پرداخت
            اقساط از 14 روز قبل امکان پذیر می‌باشد.
          </p>
          <p className="text-justify text-sm font-extralight leading-7">
            <span className=" text-black">تبصره 2</span>: در صورتی که
            مشتری قسط ماهیانه اعتبار خود را به موقع پرداخت نکند، به اعتبار‌دهنده
            بدهکار شده و موظف است بابت هر روز دیرکرد از تاریخ سررسید هر قسط به
            تفکیک، 0.1 درصد مبلغ قسط هر ماه را به اعتبار‌دهنده پرداخت کند.
          </p>
          <h3 className=" text-base text-black">
            ماده 7 – راه های پرداخت
          </h3>
          <p className="text-justify text-sm font-extralight leading-7">
            مشتری می‌تواند بازپرداخت و بدهی اعتبار دریافتی را از طریق صفحه
            پرداخت در سامانه برخط و یا واریز به حساب‌های بانکی اعلام شده در
            سامانه برخط انجام دهد.
          </p>
          <h3 className=" text-base text-black">
            ماده 8 – حقوق و تعهدات طرفین
          </h3>
          <p className="text-justify text-sm font-extralight leading-7">
            1 – مشتری موظف است بدهی ناشی از استفاده از اعتبار خود را ظرف مهلت
            مقرر به اعتبار‌دهنده پرداخت کند. در غیر این صورت اعتبار‌دهنده اختیار
            وصول بدهی مشتری و تنظیم شکایت قانونی را از هر جهت خواهد داشت.
          </p>
          <p className="text-justify text-sm font-extralight leading-7">
            2 – اعتبار‌دهنده میزان بدهی و مانده دارایی اعتباری را در هر لحظه از
            طریق سامانه بر خط و نرم افزار موبایل در اختیار مشتری می‌گذارد، در
            دسترس مشتری قرار می‌دهد.
          </p>
          <p className="text-justify text-sm font-extralight leading-7">
            3 - در راستای اجرای مفاد این قرارداد و تا زمانی که بدهی مشتری به طور
            کامل تسویه نشده یا تعهدات وی ایفا نشده باشد، اعتباردهنده می‌تواند
            نسبت به جلوگیری از خرید و فروش واحد‌های سرمایه‌گذاری، تبدیل دارایی
            اعتباری به نقد و یا در صورت وجود، نقد کردن دارایی غیر اعتباری مشتری
            با توجه به صلاح‌دید خود اقدام کند.
          </p>
          <p className="text-justify text-sm font-extralight leading-7">
            4 - این قرارداد قائم به شخص مشتری بوده و مشتری به هر نحو، حق انتقال
            یا واگذاری موضوع قرارداد به شخص یا اشخاص ثالث را ندارد. در صورتی که
            مشخص شود مشتری این تعهد خود را به هر نحوی نقض نموده، علاوه بر فسخ
            قرارداد از سوی اعتبار‌دهنده، مشتری متعهد خواهد بود تا شخصاً نسبت به
            تسویه اعتبار اخذ شده به موجب این قرارداد اقدام کند.
          </p>
          <h3 className=" text-base text-black">
            ماده 9 - نحوه ارسال اخطاریه‌های موضوع این قرارداد
          </h3>
          <p className="text-justify text-sm font-extralight leading-7">
            مشتری موظف است بدهی اعتبار دریافتی خود را در موعد مقرر پرداخت کند.
            در غیر این صورت اعتبار‌دهنده به یکی از طریق ذیل، اخطاریه عدم پرداخت
            بدهی را به مشتری ابلاغ می‌کند:
          </p>
          <p className="text-justify text-sm font-extralight leading-7">
            - اعلام در سامانه بر خط / نرم افزار موبایل
          </p>
          <p className="text-justify text-sm font-extralight leading-7">
            - ارسال پیامک به شماره اعلام شده توسط مشتری
          </p>
          <p className="text-justify text-sm font-extralight leading-7">
            - تماس از طریق مرکز تماس شرکت با شماره اعلام شده توسط مشتری
          </p>
          <p className="text-justify text-sm font-extralight leading-7">
            <span className=" text-black">تبصره 1</span>: در صورت ابلاغ
            اخطاریه به بیش از یک روش، تاریخ احتساب، نخستین ابلاغ است.
          </p>
          <p className="text-justify text-sm font-extralight leading-7">
            <span className=" text-black">تبصره 2</span>: ارسال پیامک به
            شماره مشتری، تماس با شماره اعلام شده توسط مشتری، اعلام در سامانه بر
            خط و یا نرم افزار موبایل، ابلاغ و دریافت توسط مشتری تلقی خواهد شد،
            حتی اگر به علتی خارج از اراده اعتبار‌دهنده تماس یا ارسال پیامک منجر
            به اطلاع واقعی مشتری نشود.
          </p>
          <h3 className=" text-base text-black">
            ماده 10 - وصول مطالبات
          </h3>
          <p className="text-justify text-sm font-extralight leading-7">
            مشتری می‌پذیرد که بازپرداخت و بدهی اعتبار دریافتی را به اعتبار‌دهنده
            پرداخت کند. در صورت عدم پرداخت اقساط در موعد مقرر اعتبار‌دهنده
            می‌تواند اقساط اعتبار، خسارات تاخیر در ایفای تعهدات و هزینه‌های
            دادرسی و اجرائی و حق‌الوکاله وکیل را از طریق قانونی از مشتری اخذ
            نماید.
          </p>
          <h3 className=" text-base text-black">
            ماده 11 – انتقال دارایی اعتباری به دارایی نقدی
          </h3>
          <p className="text-justify text-sm font-extralight leading-7">
            اعتباردهنده پس از تسویه کامل اقساط و بدهی‌ اعتبار دریافت شده توسط
            مشتری، می‌تواند دارایی نقد و دارایی صندوق‌های مشتری را به دارایی
            نقدی مشتری منتقل می‌کند.
          </p>
          <p className="text-justify text-sm font-extralight leading-7">
            <span className=" text-black">تبصره 1</span>: امکان انتقال
            اعتبار قبل از تاریخ سررسید آخرین قسط امکان پذیر نمی‌باشد. حتی در
            صورتی که تسویه کامل اقساط و بدهی انجام شده باشد.
          </p>
          <h3 className=" text-base text-black">ماده 12 – فورس ماژور</h3>
          <p className="text-justify text-sm font-extralight leading-7">
            هرگاه اجرای تمام یا بخشی از قرارداد، به استثنای بازپرداخت اعتبار در
            موعد مقرر و بدهی مشتری، به واسطه یک امر خارجی، غیر قابل رفع و غیر
            قابل پیشبینی، غیرممکن شود یا به تأخیر افتد، طرفی که در این وضعیت
            قرار گرفته است مسئول جبران خسارات ناشی از عدم اجرا یا تأخیر در اجرای
            قرارداد نیست. در این صورت وی مکلف است در اسرع وقت (حداکثر 7 روز)
            مراتب را کتباً به طرف مقابل اطلاع دهد. ادامه فورس ماژور در هر شرایطی
            مازاد بر 3 ماه از تاریخ بروز فروس ماژور برای هریک از طرفین، موجب
            انحلال و انفساخ این قرارداد می‌باشد.
          </p>
          <p className="text-justify text-sm font-extralight leading-7">
            <span className=" text-black">تبصره</span>: عدم پرداخت بدهی و
            کلیه هزینه های آن توسط مشتری در موعد مقرر به هر دلیل ولو فورس ماژور
            از مصادیق نقض قرارداد محسوب می‌شود و مشتری موظف به پرداخت بازپرداخت
            اعتبار و بدهی خود می‌باشد.
          </p>
          <h3 className=" text-base text-black">
            ماده 13 – فسخ و انفساخ قرارداد
          </h3>
          <p className="text-justify text-sm font-extralight leading-7">
            در موارد زیر این قرارداد منفسخ و اعتبار دهنده موظف است دارایی
            اعتباری مشتری را به میزانی که تسویه شده باشد، به دارایی نقدی مشتری
            منتقل کند. همچنین مشتری موظف است بدهی ناشی از دیرکرد اقساط خود را به
            اعتبار دهنده پرداخت کند.
          </p>
          <p className="text-justify text-sm font-extralight leading-7">
            - انحلال یا ورشکستگی اعبتاردهنده
          </p>
          <p className="text-justify text-sm font-extralight leading-7">
            - اختلال در سامانه معاملاتی اعتباردهنده بیش از 30 روز کاری
          </p>
          <h3 className=" text-base text-black">
            ماده 14 – حل و فصل اختلافات
          </h3>
          <p className="text-justify text-sm font-extralight leading-7">
            در صورت بروز اختلاف در تفسیر یا اجرای مفاد تمام یا بخشی از قرارداد،
            طرفین تمام تلاش خود را برای حل موضوع اختلاف از طریق مذاکره به کار
            خواهند بست. در این راستا مشتری موظف به همکاری با اعتبار دهنده و در
            صورت لزوم شرکت در جلسات حضوری یا برخط خواهد بود. در صورت عدم حصول
            توافق ظرف 10 روز کاری از تاریخ اعلام، کلیه اختلافات و دعاوی ناشی از
            این قرارداد و یا راجع به آن به کانون داوری استان البرز ارجاع می‌گردد
            تا به صورت قطعی و لازم‌الاجرا به‌‍وسیله داور حل و فصل شود. داور
            علاوه بر مقررات حاکم، عرف تجاری ذی‌ربط را نیز مراعات خواهد نمود. شرط
            داوری حاضر، موافقت نامه‌ای مستقل از این قرارداد تلقی می‌شود و در هر
            حال لازم‌الاجرا است.
          </p>
          <h3 className=" text-base text-black">
            مادۀ 15 - اقامتگاه قانونی و اطلاعات تماس طرفین
          </h3>
          <p className="text-justify text-sm font-extralight leading-7">
            اقامتگاه حقیقی و اطلاعات تماس طرفین همان است که در مقدمه قرارداد ذکر
            شده است. همچنین اقامتگاه قانونی طرفین طبق ماده ۱۰۱۰ قانون مدنی استان
            البرز، شهر کرج و محله مهرشهر می‌باشد. لازم به ذکر است اجرای تعهدات
            حاصله از این قرارداد و یا دعاوی راجعه به آن در اقامتگاه قانونی صورت
            می‌پذیرد.
          </p>
          <p className="text-justify text-sm font-extralight leading-7">
            این قرارداد در 15 ماده و 10 تبصره، در دو نسخه که هر دو اعتبار واحد
            دارند، تنظیم شد و در تاریخ درخواست اعتبار توسط مشتری، به امضا و
            تأیید طرفین رسید. ضمناً مشتری به موجب عقد خارج لازم و به صورت
            غیرقابل رجوع پذیرفت؛ این قرارداد از طریق سامانه الکترونیکی و آنلاین
            شرکت پردازش اطلاعات مالی اهرم به وی ارایه و مشتری ضمن مطالعه کامل،
            با تأیید این قرارداد در سامانه مذکور به شکل الکترونیکی، امضا و منعقد
            شده از سوی وی می‌باشد و صحت و اعتبار این قرارداد در روابط میان طرفین
            و سایر مراجع اداری و قضایی ذیربط به استناد ماده ۷ قانون تجارت
            الکترونیکی مصوب سال ۱۳۸۲ معتبر و ازهر جهت قابل استناد است.
          </p>
          <p className="text-justify text-sm font-extralight leading-7">
            امضای این قرارداد به معنی الزام اعتبار‌دهنده به پذیرش درخواست مشتری
            نیست و اعتبار پس از تایید هویت مشتری به آن تعلق می‌گیرد.
          </p>
        </div>
      </div>
    </Modal>
  );
}
