import "../css/main.css";

document.querySelector("#app").innerHTML = `
  <header class="w-full bg-white border-b border-gray-200">

    <!-- ========================= -->
    <!-- ردیف اول هدر -->
    <!-- ========================= -->

    <div class="h-[72px] px-6 flex items-center gap-6">

      <!-- لوگو -->
<div class="shrink-0">
  <img
    src="/digikala-logo.svg"
    alt="دیجی‌کالا"
    class="w-[200px] h-auto"
  />
</div>


      <!-- جستجو -->
<div class="flex-1 max-w-[880]">

  <div
    class="relative w-full h-[44] bg-gray-100 rounded-lg"
  >

    <input
      type="text"
      placeholder="جستجو"
      class="w-full h-full bg-transparent border-none outline-none px-13 text-sm text-gray-700 placeholder:text-gray-400 font-[Vazirmatn]"
    />

    <i
      data-lucide="search"
      class="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
    ></i>

  </div>

</div>


      <!-- بخش سمت چپ -->
      <div class="flex items-center gap-5 mr-auto pl-4">

      <!-- اعلان -->
        <div
          class="cursor-pointer "
        >
          <i
            data-lucide="bell"
            class="w-5 h-5"
          ></i>
        </div>

        <!-- ورود -->
        <div
          class="flex items-center gap-2 text-sm text-gray-700 whitespace-nowrap cursor-pointer "
        >
          <i
            data-lucide="user"
            class="w-5 h-5"
          ></i>

          <span>
            ورود | ثبت‌نام
          </span>
        </div>



        <!-- سبد خرید -->
        <div
          class="cursor-pointer "
        >
          <i
            data-lucide="shopping-cart"
            class="w-5 h-5"
          ></i>
        </div>

      </div>

    </div>


    <!-- ========================= -->
    <!-- ردیف دوم -->
    <!-- ========================= -->

    <div
      class="h-[52px] border-t border-gray-100 px-6 flex items-center"
    >

      <!-- منوی دسته بندی -->
      <div
        class="flex items-center gap-2 font-bold text-sm text-gray-800 whitespace-nowrap pl-6 border-l  border-gray-300 h-6"
      >

       <!-- دسته بندی کالاها -->
<div class="relative group">

  <!-- عنوان دسته بندی -->
  <a
  href="#"
  class="relative flex items-center gap-2
         text-sm font-[Vazirmatn]
         cursor-pointer
         after:content-['']
         after:absolute
         after:right-0
         after:-bottom-2
         after:h-[2px]
         after:w-0
         after:bg-red-600
         after:transition-all
         after:duration-300
         hover:after:w-full"
>
    <i
      data-lucide="menu"
      class="w-5 h-5"
    ></i>

    <span class="text-sm font-[Vazirmatn]">
      دسته بندی کالاها
    </span>

  </a>


  <!-- مگامنو -->
  
  <div
    class="absolute right-0 top-full z-50 mt-4
           invisible opacity-0
           group-hover:visible group-hover:opacity-100
           transition-all duration-200
           w-[1100px]
           h-[530px]
           border-gray-300
           shadow-lg
           flex"
    style="direction: ltr;"
  >
  

    <!-- ========================= -->
    <!-- زیرمنو -->
    <!-- ========================= -->

    <div
      class="w-[850px] h-full bg-white"
      style="direction: rtl;"
    >

      <!-- زیرمنوی موبایل -->
      <div
        data-submenu="mobile"
        class="w-full h-full px-8 py-6 max-h-[600px] overflow-y-auto"
        style="direction: ltr;"
      >
 
        <!-- عنوان -->
        <div class="mb-8" style="direction: rtl;">

          <h2
            class=" font-[Vazirmatn] font-semibold text-blue-900 cursor-pointer"
          >
          همه محصولات موبایل >
          </h2>

        </div>


        <!-- ستون‌ها -->
        <div class="grid grid-cols-4 gap-10" style="direction: rtl;">


          <!-- ستون اول -->
          <div>

            <div class="flex items-center gap-2 mb-5">

              <span class="w-[1.5px] h-4 bg-red-600"></span>

              <h3
                class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer  hover:text-red-600"
              >
               انتخاب موبایل > 
              </h3>

            </div>
            <div class="flex items-center gap-2 mb-5">

              <span class="w-[1.5px] h-4 bg-red-600"></span>

              <h3
                class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer  hover:text-red-600"
              >
              گوشی های اپل >
              </h3>

            </div>
            <ul class="space-y-4 pb-3 text-[13px] text-gray-500 font-[Vazirmatn]">

              

              <li class="cursor-pointer hover:text-red-600">
                آیفون 16
              </li>

              <li class="cursor-pointer hover:text-red-600">
                آیفون 17
              </li>

            </ul>
              <div class="flex items-center gap-2 mb-5">

              <span class="w-[1.5px] h-4 bg-red-600"></span>

              <h3
                class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer  hover:text-red-600"
              >
              برند های مختلف موبایل >
              </h3>

            </div>
            <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">

              

              <li class="cursor-pointer hover:text-red-600">
                گوشی سامسونگ
              </li>

              <li class="cursor-pointer hover:text-red-600">
                گوشی شیائومی
              </li>

              <li class="cursor-pointer hover:text-red-600">
                گوشی نوکیا
              </li>

              <li class="cursor-pointer hover:text-red-600">
                گوشی ریلمی
              </li>
              <li class="cursor-pointer hover:text-red-600">
                گوشی سایفر
              </li>
              <li class="cursor-pointer hover:text-red-600">
                گوشی آنر
              </li>
              <li class="cursor-pointer hover:text-red-600">
                گوشی ناتینگ فون
              </li>
              <li class="cursor-pointer hover:text-red-600">
                گوشی وکال
              </li>
               <li class="cursor-pointer hover:text-red-600">
                گوشی موتورلا
              </li>
              <li class="cursor-pointer hover:text-red-600">
                گوشی تی سی ال
              </li>
              <li class="cursor-pointer hover:text-red-600">
                گوشی هواوی
              </li>
              <li class="cursor-pointer hover:text-red-600">
                گوشی داریا
              </li>
              <li class="cursor-pointer hover:text-red-600">
                گوشی گوگل پیکسل
              </li>
              <li class="cursor-pointer hover:text-red-600">
                گوشی تی سی اچ
              </li>
              <li class="cursor-pointer hover:text-red-600">
                گوشی جی ال ایکس
              </li>
              <li class="cursor-pointer hover:text-red-600">
                گوشی آلکاتل
              </li>
              <li class="cursor-pointer hover:text-red-600">
                گوشی رد تون
              </li>
              <li class="cursor-pointer hover:text-red-600">
                گوشی وان پلاس
              </li>
              <li class="cursor-pointer hover:text-red-600">
                گوشی موبایل دوجی
              </li>
              <li class="cursor-pointer hover:text-red-600">
                گوشی HMD
              </li>
              <li class="cursor-pointer hover:text-red-600">
                گوشی پوکو
              </li>
            </ul>
            <div class="flex items-center gap-2 mb-5 pt-5 pb-3">

              <span class="w-[1.5px] h-4 bg-red-600"></span>

              <h3
                class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer  hover:text-red-600"
              >
              برندهای برتر >
              </h3>

            </div>
            <ul class="space-y-4 pb-3 text-[13px] text-gray-500 font-[Vazirmatn]">

              

              <li class="cursor-pointer hover:text-red-600">
                 سامسونگ
              </li>
              <li class="cursor-pointer hover:text-red-600">
                اپل
              </li>
              <li class="cursor-pointer hover:text-red-600">
                انر
              </li>
              <li class="cursor-pointer hover:text-red-600">
                هواوی
              </li>
              <li class="cursor-pointer hover:text-red-600">
                ریلمی
              </li>
              <li class="cursor-pointer hover:text-red-600">
                سایفر
              </li>
              <li class="cursor-pointer hover:text-red-600">
                تی سی اچ
              </li>

            </ul>

          </div>


          <!-- ستون دوم -->
          <div>

            <div class="flex items-center gap-2 mb-5">

              <span class="w-[1.5px] h-4 bg-red-600"></span>

              <h3
                class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer  hover:text-red-600"
              >
              گوشی بر اساس قیمت >
              </h3>

            </div>

            <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">

              <li class="cursor-pointer hover:text-red-600">
                گوشی ارزان
              </li>

              <li class="cursor-pointer hover:text-red-600">
                گوشی تا ۳ میلیون تومان
              </li>

              <li class="cursor-pointer hover:text-red-600">
                گوشی تا ۵ میلیون تومان
              </li>

              <li class="cursor-pointer hover:text-red-600">
                گوشی تا ۱۰ میلیون تومان
              </li>

              <li class="cursor-pointer hover:text-red-600">
                گوشی تا ۲۰ میلیون تومان
              </li>

              <li class="cursor-pointer hover:text-red-600">
                گوشی تا ۳۰ میلیون تومان
              </li>

              <li class="cursor-pointer hover:text-red-600">
                گوشی تا ۴۰ میلیون تومان
              </li>

              <li class="cursor-pointer hover:text-red-600">
                گوشی تا ۵۰ میلیون تومان
              </li>
              <li class="cursor-pointer hover:text-red-600">
                گوشی تا ۶۰ میلیون تومان
              </li>
              <li class="cursor-pointer hover:text-red-600">
                گوشی تا ۷۰ میلیون تومان
              </li>
            </ul>
            <div class="flex items-center gap-2 mb-5 pt-5">

              <span class="w-[1.5px] h-4 bg-red-600"></span>

              <h3
                class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer  hover:text-red-600"
              >
              گوشی بر اساس عملکرد >
              </h3>

            </div>
            <ul class="space-y-4  text-sm text-gray-500 font-[Vazirmatn]">

              <li class="cursor-pointer hover:text-red-600">
                گوشی گیمینگ
              </li>

              <li class="cursor-pointer hover:text-red-600">
                گوشی 5G
              </li>

              <li class="cursor-pointer hover:text-red-600">
              گوشی دکمه ای
              </li>

              <li class="cursor-pointer hover:text-red-600">
              گوشی ضدآب
              </li>

              <li class="cursor-pointer hover:text-red-600">
               گوشی مناسب عکاسی 
              </li>

              <li class="cursor-pointer hover:text-red-600">
               گوشی میان رده
              </li>
              <li class="cursor-pointer hover:text-red-600">
               گوشی دانش آموزی
              </li>
              <li class="cursor-pointer hover:text-red-600">
               گوشی پرچمدار
              </li>
              <li class="cursor-pointer hover:text-red-600">
               گوشی دو سیمکارت
              </li>
            </ul>
            <div class="flex items-center gap-2 mb-5 pt-5">

              <span class="w-[1.5px] h-4 bg-red-600"></span>

              <h3
                class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer  hover:text-red-600"
              >
               حافظه داخلی
              </h3>

            </div>
            <ul class="space-y-4  text-sm text-gray-500 font-[Vazirmatn]">

              <li class="cursor-pointer hover:text-red-600">
                گوشی 64 گیگابایت
              </li>

              <li class="cursor-pointer hover:text-red-600">
                گوشی 128 گیگابایت
              </li>

              <li class="cursor-pointer hover:text-red-600">
              گوشی 256 گیگابایت
              </li>

              <li class="cursor-pointer hover:text-red-600">
              گوشی 512 گیگابایت
              </li>

              <li class="cursor-pointer hover:text-red-600">
               گوشی یک ترابایت
              </li>

            </ul>

          </div>


          <!-- ستون سوم -->
          <div>

            <div class="flex items-center gap-2 mb-5 ">

              <span class="w-[1.5px] h-4 bg-red-600"></span>

              <h3
                class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer  hover:text-red-600"
              >
             لوازم جانبی موبایل >
              </h3>

            </div>

            <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">

              <li class="cursor-pointer hover:text-red-600">
                شارژر گوشی
              </li>

              <li class="cursor-pointer hover:text-red-600">
                شارژر وایرلس
              </li>

              <li class="cursor-pointer hover:text-red-600">
                شارژر تایپ سی
              </li>

              <li class="cursor-pointer hover:text-red-600">
                کابل شارژ
              </li>

              <li class="cursor-pointer hover:text-red-600">
                قاب گوشی
              </li>

              <li class="cursor-pointer hover:text-red-600">
                گلس گوشی
              </li>

              <li class="cursor-pointer hover:text-red-600">
               شارژر فندکی
              </li>

              <li class="cursor-pointer hover:text-red-600">
               هولدر گوشی موبایل
              </li>

              <li class="cursor-pointer hover:text-red-600">
               پاوربانک
              </li>
              <li class="cursor-pointer hover:text-red-600">
               پاور استیشن
              </li>
              <li class="cursor-pointer hover:text-red-600">
               مونوپاد
              </li>
              <li class="cursor-pointer hover:text-red-600">
               کاور ایرپاد
              </li>
              <li class="cursor-pointer hover:text-red-600">
               هولدر گردنی
              </li>
              <li class="cursor-pointer hover:text-red-600">
               دسته بازی موبایل
              </li>
            </ul>
            <div class="flex items-center gap-2 mb-5 pt-5">

              <span class="w-[1.5px] h-4 bg-red-600"></span>

              <h3
                class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer  hover:text-red-600"
              >
            قاب گوشی >
              </h3>

            </div>

            <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">

              <li class="cursor-pointer hover:text-red-600">
                قاب گوشی سامسونگ
              </li>

              <li class="cursor-pointer hover:text-red-600">
                قاب گوشی آیفون
              </li>

              <li class="cursor-pointer hover:text-red-600">
               قاب گوشی شیائومی
              </li>

              <li class="cursor-pointer hover:text-red-600">
                قاب گوشی ریلمی
              </li>

              <li class="cursor-pointer hover:text-red-600">
                قاب گوشی پوکو
              </li>

              <li class="cursor-pointer hover:text-red-600">
                قاب گوشی وکال
              </li>

             
            </ul>

          </div>


          <!-- ستون چهارم -->
          <div>

            <div class="flex items-center gap-2 mb-5">

              <span class="w-0.5 h-4 bg-red-600"></span>

              <h3
                class="font-[Vazirmatn] text-[15px] font-semibold"
              >
                داغ ترین ها >
              </h3>

            </div>

            <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">

              <li class="cursor-pointer hover:text-red-600">
                گوشی S26
              </li>

              <li class="cursor-pointer hover:text-red-600">
                آیفون ۱۷
              </li>

              <li class="cursor-pointer hover:text-red-600">
                گوشی S25 سامسونگ
              </li>

              <li class="cursor-pointer hover:text-red-600">
                شیائومی نوت ۱۵
              </li>

              <li class="cursor-pointer hover:text-red-600">
                شیائومی نوت ۱۴
              </li>

              <li class="cursor-pointer hover:text-red-600">
                ردمی نوت ۱۴ پرو
              </li>
              <li class="cursor-pointer hover:text-red-600">
              گوشی سامسونگ سری s
              </li>
              <li class="cursor-pointer hover:text-red-600">
                گوشی سامسونگ سری a
              </li>
              <li class="cursor-pointer hover:text-red-600">
                گوشی سامسونگ سری m
              </li>
              

            </ul>

          </div>

        </div>

      </div>
     
      <!-- ========================= -->
<!-- زیرمنوی لوازم تحریر -->
<!-- ========================= -->

<div
  data-submenu="stationery"
  class="hidden w-[850px] h-full px-8 py-6 max-h-[600px] overflow-y-auto"
  style="direction: ltr;"
>

  <!-- عنوان -->
  <div class="mb-8" style="direction: rtl;">
    <h2
      class="font-[Vazirmatn] font-semibold text-blue-900 cursor-pointer"
    >
      همه محصولات لوازم تحریر >
    </h2>
  </div>

  <!-- ستون‌ها -->
  <div
    class="grid grid-cols-4 gap-10"
    style="direction: rtl;"
  >

    <!-- ========================= -->
    <!-- ستون اول -->
    <!-- ========================= -->

    <div>

      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          نوشت افزار >
        </h3>
      </div>

      <ul class="space-y-4 pb-3 text-[13px] text-gray-500 font-[Vazirmatn]">

        <li class="cursor-pointer hover:text-red-600">
          مداد
        </li>

        <li class="cursor-pointer hover:text-red-600">
          مداد طراحی
        </li>

        <li class="cursor-pointer hover:text-red-600">
          مداد B2
        </li>

        <li class="cursor-pointer hover:text-red-600">
          مداد B6
        </li>

        <li class="cursor-pointer hover:text-red-600">
          مداد HB
        </li>

        <li class="cursor-pointer hover:text-red-600">
          مداد سه گوش
        </li>

        <li class="cursor-pointer hover:text-red-600">
          مداد کرومی
        </li>

        <li class="cursor-pointer hover:text-red-600">
          مداد تراش
        </li>

        <li class="cursor-pointer hover:text-red-600">
          ماژیک هایلایتر
        </li>

        <li class="cursor-pointer hover:text-red-600">
          ماژِیک
        </li>

        <li class="cursor-pointer hover:text-red-600">
          ماژیک راندو
        </li>

        <li class="cursor-pointer hover:text-red-600">
         ماژیک رنگی
        </li>

        <li class="cursor-pointer hover:text-red-600">
         ماژیک وایت برد
        </li>

        <li class="cursor-pointer hover:text-red-600">
         ماژیک سی دی
        </li>

        <li class="cursor-pointer hover:text-red-600">
         ماژیک نقره ای
        </li>

        <li class="cursor-pointer hover:text-red-600">
         خودکار و روان نویس
        </li>

        <li class="cursor-pointer hover:text-red-600">
         خودکار کرومی
        </li>

        <li class="cursor-pointer hover:text-red-600">
         خودکار اکلیلی
        </li>

        <li class="cursor-pointer hover:text-red-600">
         خودکار رنگی
        </li>

        <li class="cursor-pointer hover:text-red-600">
         خودکار پاکن دار
        </li>

        <li class="cursor-pointer hover:text-red-600">
         خودکار راپید
        </li>

        <li class="cursor-pointer hover:text-red-600">
         خودکار فلزی
        </li>

        <li class="cursor-pointer hover:text-red-600">
        خودنویس
        </li>

        <li class="cursor-pointer hover:text-red-600">
        نوک مداد نوکی
        </li>

        <li class="cursor-pointer hover:text-red-600">
        مداد نوکی فلزی
        </li>

        <li class="cursor-pointer hover:text-red-600">
        مداد نوکی
        </li>

        <li class="cursor-pointer hover:text-red-600">
        غلط گیر نواری
        </li>

        <li class="cursor-pointer hover:text-red-600">
        پاک کن برقی
        </li>

      </ul>


      
    </div>


    <!-- ========================= -->
    <!-- ستون دوم -->
    <!-- ========================= -->

    <div>

      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
         ابزار طراحی و مهندسی >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">

        <li class="cursor-pointer hover:text-red-600">
         خط کش
        </li>

        <li class="cursor-pointer hover:text-red-600">
         خط کش فلزی
        </li>

        <li class="cursor-pointer hover:text-red-600">
         خط کش پلاستیکی
        </li>

        <li class="cursor-pointer hover:text-red-600">
         پرگار
        </li>

      </ul>

      <div class="flex items-center gap-2 mb-3 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          لوازم اداری >
        </h3>
      </div>


      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
         دفتر و کاغذ و مقوا >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">

        <li class="cursor-pointer hover:text-red-600">
          دفتر
        </li>

        <li class="cursor-pointer hover:text-red-600">
          دفتر 50 برگ 
        </li>

        <li class="cursor-pointer hover:text-red-600">
          دفتر 60 برگ
        </li>

        <li class="cursor-pointer hover:text-red-600">
          دفتر 80 برگ
        </li>

        <li class="cursor-pointer hover:text-red-600">
         دفتر 100 برگ
        </li>

        <li class="cursor-pointer hover:text-red-600">
        دفتر کلاسوری 
        </li>

        <li class="cursor-pointer hover:text-red-600">
        دفتر طراحی
        </li>

        <li class="cursor-pointer hover:text-red-600">
        دفتر کرومی
        </li>

        <li class="cursor-pointer hover:text-red-600">
        دفتر برنامه ریزی
        </li>

        <li class="cursor-pointer hover:text-red-600">
        دفتر سیمی
        </li> 
        
        <li class="cursor-pointer hover:text-red-600">
        دفتر خاطرات
        </li>

        <li class="cursor-pointer hover:text-red-600">
        دفتر نقاشی
        </li>

        <li class="cursor-pointer hover:text-red-600">
        دفتر شطرنجی
        </li>

        <li class="cursor-pointer hover:text-red-600">
        دفتر دو خط
        </li>

        <li class="cursor-pointer hover:text-red-600">
        دفتر مشق
        </li>

        <li class="cursor-pointer hover:text-red-600">
       کاغذ
        </li>

        <li class="cursor-pointer hover:text-red-600">
       مقوا
        </li>

      </ul>

    </div>


    <!-- ========================= -->
    <!-- ستون سوم -->
    <!-- ========================= -->

    <div>

      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
         کیف و کوله مدرسه >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">

        <li class="cursor-pointer hover:text-red-600">
         کوله پشتی ضد آب
        </li>

        <li class="cursor-pointer hover:text-red-600">
         کوله مهد کودک
        </li>

        <li class="cursor-pointer hover:text-red-600">
         کوله پشتی چرخدار
        </li>

        <li class="cursor-pointer hover:text-red-600">
         کوله پشتی یونیکورن
        </li>

        <li class="cursor-pointer hover:text-red-600">
         کوله پشتی هری پاتر
        </li>

        <li class="cursor-pointer hover:text-red-600">
         کوله پشتی بتمن
        </li>

        <li class="cursor-pointer hover:text-red-600">
         کوله پشتی باب اسفنجی
        </li>


      </ul>


      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
         جامدادی >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">

        <li class="cursor-pointer hover:text-red-600">
         جامدادی تبلتی
        </li>

        <li class="cursor-pointer hover:text-red-600">
          جامدادی کرومی
        </li>

        <li class="cursor-pointer hover:text-red-600">
          جامدادی شفاف
        </li>

        <li class="cursor-pointer hover:text-red-600">
         جامدادی باب اسفنجی
        </li>

        <li class="cursor-pointer hover:text-red-600">
          جامدادی فضانوردی
        </li>

        <li class="cursor-pointer hover:text-red-600">
         جامدادی بتمن
        </li>

        <li class="cursor-pointer hover:text-red-600">
         جامدادی مرد عنکبوتی
        </li>

        <li class="cursor-pointer hover:text-red-600">
         جامدادی اسب تک شاخ
        </li>

        <li class="cursor-pointer hover:text-red-600">
         جامدادی رونالدو
        </li>

        <li class="cursor-pointer hover:text-red-600">
         جامدادی خرگوش
        </li>

        <li class="cursor-pointer hover:text-red-600">
         جامدادی انیمه
        </li>

        <li class="cursor-pointer hover:text-red-600">
         جامدادی پارچه ای
        </li>

        <li class="cursor-pointer hover:text-red-600">
         جامدادی چوبی
        </li>

        <li class="cursor-pointer hover:text-red-600">
         جامدادی مخمل
        </li>
        <li class="cursor-pointer hover:text-red-600">
         جامدادی فلزی
        </li>
        <li class="cursor-pointer hover:text-red-600">
         جامدادی چرم
        </li>
        <li class="cursor-pointer hover:text-red-600">
         جامدادی سبز
        </li>
        <li class="cursor-pointer hover:text-red-600">
         جامدادی صورتی
        </li>
        <li class="cursor-pointer hover:text-red-600">
         جامدادی کتابی
        </li>

      </ul>

      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
         ابزار نقاشی و رنگ آمیزی >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">

        <li class="cursor-pointer hover:text-red-600">
        پاستل و مداد شمعی
        </li>

        <li class="cursor-pointer hover:text-red-600">
        ابرنگ و گواش
        </li>

        <li class="cursor-pointer hover:text-red-600">
         قلم مو
        </li>

        <li class="cursor-pointer hover:text-red-600">
        پالت رنگ
        </li>

        <li class="cursor-pointer hover:text-red-600">
         بوم نقاشی
        </li>

        <li class="cursor-pointer hover:text-red-600">
        مداد رنگی
        </li>

        <li class="cursor-pointer hover:text-red-600">
       مداد رنگی 6 رنگ
        </li>

        <li class="cursor-pointer hover:text-red-600">
        مداد رنگی 12 رنگ
        </li>

      </ul>
      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
        قمقمه و فلاسک کودک و نوزاد >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">

        <li class="cursor-pointer hover:text-red-600">
       قمقمه فضانورد
        </li>

        <li class="cursor-pointer hover:text-red-600">
       قمقمه خرسی
        </li>

        <li class="cursor-pointer hover:text-red-600">
        قمقمه تاشو
        </li>

        <li class="cursor-pointer hover:text-red-600">
        قمقمه سیلیکونی
        </li>

        <li class="cursor-pointer hover:text-red-600">
        قمقمه نی دار
        </li>

        <li class="cursor-pointer hover:text-red-600">
       قمقمه فلزی
        </li>

      </ul>


    </div>


    <!-- ========================= -->
    <!-- ستون چهارم -->
    <!-- ========================= -->

    <div>

      <div class="flex items-center gap-2 mb-5">

        <span class="w-0.5 h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold"
        >
          بسته های لوازم تحریر >
        </h3>

      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">

        <li class="cursor-pointer hover:text-red-600">
         لوازم تحریر طرح انیمه
        </li>

        <li class="cursor-pointer hover:text-red-600">
         لوازم تحریر کرومی
        </li>
        <li class="cursor-pointer hover:text-red-600">
         لوازم تحریر کرومی
        </li>
        <li class="cursor-pointer hover:text-red-600">
         لوازم تحریر سینامورول
        </li>
        <li class="cursor-pointer hover:text-red-600">
         لوازم تحریر هلوکیتی
        </li>
        <li class="cursor-pointer hover:text-red-600">
         لوازم تحریر مرد عنکبوتی
        </li>
        <li class="cursor-pointer hover:text-red-600">
         لوازم تحریر لبوبو
        </li>
        <li class="cursor-pointer hover:text-red-600">
         لوازم تحریر هری پاتر
        </li>
        <li class="cursor-pointer hover:text-red-600">
         لوازم تحریر بتمن
        </li>
        <li class="cursor-pointer hover:text-red-600">
         لوازم تحریر هویجی
        </li>
        <li class="cursor-pointer hover:text-red-600">
         لوازم تحریر سونیک
        </li>

        <li class="cursor-pointer hover:text-red-600">
         لوازم تحریر بسکتبال
        </li>
        <li class="cursor-pointer hover:text-red-600">
         لوازم تحریر ونگوک
        </li>
        <li class="cursor-pointer hover:text-red-600">
         لوازم تحریر ماینکرافت
        </li>
        <li class="cursor-pointer hover:text-red-600">
         لوازم تحریر گربه
        </li>
        <li class="cursor-pointer hover:text-red-600">
         لوازم تحریر یونیکورن
        </li>

      </ul>
      <div class="flex items-center gap-2 mb-5 mt-5">

        <span class="w-0.5 h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold"
        >
         چراغ مطالعه >
        </h3>

      </div>
      <div class="flex items-center gap-2 mb-5">

        <span class="w-0.5 h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold"
        >
         میز تحریر >
        </h3>

      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">


        <li class="cursor-pointer hover:text-red-600">
        میز تحریر کودک
        </li>
        <li class="cursor-pointer hover:text-red-600">
        میز تحریر کرومی
        </li>
       

      </ul>

    </div>

  </div>

</div>

<!-- زیرمنوی لپ تاپ -->
<div
  data-submenu="laptop"
  class="hidden w-full h-full px-8 py-6 max-h-[600px] overflow-y-auto"
  style="direction: ltr;"
>

  <!-- عنوان -->
  <div class="mb-8" style="direction: rtl;">
    <h2
      class="font-[Vazirmatn] font-semibold text-blue-900 cursor-pointer"
    >
      همه محصولات لپ تاپ >
    </h2>
  </div>


  <!-- ستون‌ها -->
  <div
    class="grid grid-cols-3 gap-10"
    style="direction: rtl;"
  >

    <!-- ستون اول -->
    <div>

      <!-- انتخاب لپ تاپ -->
      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold hover:text-red-600 cursor-pointer"
        >
          انتخاب لپ تاپ >
        </h3>
      </div>

      <!-- لپ تاپ ایسوس -->
      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold hover:text-red-600 cursor-pointer"
        >
          لپ تاپ ایسوس >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">لپ تاپ vivobook</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ Zenbook</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ Zenbook</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ TUF Gaming</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ ROG</li>
      </ul>


      <!-- لپ تاپ لنوو -->
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          لپ تاپ لنوو >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">لپ تاپ V15</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ ideapad 1</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ ideapad slim 3</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ thinkpad</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ LOQ</li>
      </ul>


      <!-- مک بوک -->
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          مک بوک >
        </h3>
      </div>
        <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">مک بوک نئو</li>
        <li class="cursor-pointer hover:text-red-600">مک بوک ایر m3</li>
        <li class="cursor-pointer hover:text-red-600">مک بوک ایر m4</li>
        <li class="cursor-pointer hover:text-red-600">مک بوک ایر m5</li>
        <li class="cursor-pointer hover:text-red-600">مک بوک ایر پرو m3</li>
        <li class="cursor-pointer hover:text-red-600">مک بوک ایر پرو m4</li>
        <li class="cursor-pointer hover:text-red-600">مک بوک ایر پرو m5</li>
      </ul>
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
         لپ تاپ سرفیس>
        </h3>
      </div>
        <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">سرفیس لپ تاپ 5</li>
        <li class="cursor-pointer hover:text-red-600">سرفیس لپ تاپ 6</li>
        <li class="cursor-pointer hover:text-red-600">سرفیس لپ تاپ 7</li>
        <li class="cursor-pointer hover:text-red-600">سرفیس لپ تاپ استودیو 2</li>
      </ul>
       <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
        سایر برندهای لپ تاپ >
        </h3>
      </div>
        <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">لپ تاپ hp</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ دل</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ ایسر</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ msi</li>
      </ul>


    </div>
    


    <!-- ستون دوم -->
    <div>

      <!-- لپ تاپ گیمینگ -->
      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          لپ تاپ گیمینگ >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">لپ تاپ گیمینگ ایسوس</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ گیمینگ لنوو</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ گیمینگ acer</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ گیمینگ hp</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ گیمینگ msi</li>
      </ul>


      <!-- بر اساس مدل کارت گرافیک -->
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          بر اساس مدل کارت گرافیک >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">لپ تاپ RTX 2050</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ RTX 3050</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ RTX 4050</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ RTX 4060</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ RTX 4070</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ RTX 5050</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ RTX 5060</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ RTX 5070</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ RTX 5080</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ RTX 5090</li>
      </ul>
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          بر اساس ظرفیت کارت گرافیک >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">لپ تاپ با گرافیک 2</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ با گرافیک 4</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ با گرافیک 6</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ با گرافیک 8</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ با گرافیک 12</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ با گرافیک 16</li>
      </ul>
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-1 h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          بر اساس نرخ نوسازی صفحه نمایش >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">لپ تاپ 120 هرتز</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ 144 هرتز</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ 165 هرتز</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ 240 هرتز</li>
      </ul>


    </div>


    <!-- ستون سوم -->
    <div>

      <!-- قیمت لپ تاپ -->
      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          قیمت لپ تاپ >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">لپ تاپ تا ۵۰ میلیون</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ تا ۶۰ میلیون</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ تا ۷۰ میلیون</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ تا ۸۰ میلیون</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ تا ۹۰ میلیون</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ تا ۱۰۰ میلیون</li>
      </ul>


      <!-- براساس کاربری -->
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          براساس کاربری >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">لپ تاپ دانشجویی</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ گیمینگ</li>
        <li class="cursor-pointer hover:text-red-600">لپ تاپ مالتی مدیا</li>
      </ul>


      <!-- لوازم جانبی لپ تاپ -->
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          لوازم جانبی لپ تاپ >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">کول پد</li>
        <li class="cursor-pointer hover:text-red-600">شارژر لپ تاپ</li>
        <li class="cursor-pointer hover:text-red-600">کیف لپ تاپ</li>
        <li class="cursor-pointer hover:text-red-600">پایه لپ تاپ</li>
        <li class="cursor-pointer hover:text-red-600">موس</li>
        <li class="cursor-pointer hover:text-red-600">موس پد</li>
        <li class="cursor-pointer hover:text-red-600">استیکر لپ تاپ</li>
        <li class="cursor-pointer hover:text-red-600">اسکین لپ تاپ</li>
      </ul>

    </div>

  </div>
</div>
<!-- زیرمنوی کالای دیجیتال -->
<div
  data-submenu="digital"
  class="hidden w-full h-full px-8 py-6 max-h-[600px] overflow-y-auto"
  style="direction: ltr;"
>

  <!-- عنوان -->
  <div class="mb-8" style="direction: rtl;">
    <h2
      class="font-[Vazirmatn] font-semibold text-blue-900 cursor-pointer"
    >
      همه محصولات کالای دیجیتال >
    </h2>
  </div>


  <!-- ستون‌ها -->
  <div
    class="grid grid-cols-4 gap-10"
    style="direction: rtl;"
  >


    <!-- ستون اول -->
    <div>

      <!-- کنسول بازی -->
      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          کنسول بازی >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">PS5</li>
        <li class="cursor-pointer hover:text-red-600">PS5 Slim</li>
        <li class="cursor-pointer hover:text-red-600">PS5 Pro</li>
        <li class="cursor-pointer hover:text-red-600">PS4</li>
        <li class="cursor-pointer hover:text-red-600">Xbox</li>
        <li class="cursor-pointer hover:text-red-600">Gamestick</li>
        <li class="cursor-pointer hover:text-red-600">Nintendo</li>
      </ul>


      <!-- گیمینگ -->
      
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          گیمینگ >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">ست گیمینگ</li>
        <li class="cursor-pointer hover:text-red-600">دسته بازی</li>
        <li class="cursor-pointer hover:text-red-600">بازی PS5</li>
        <li class="cursor-pointer hover:text-red-600">بازی PS4</li>
        <li class="cursor-pointer hover:text-red-600">بازی ایکس باکس</li>
        <li class="cursor-pointer hover:text-red-600">بازی pc </li>
        <li class="cursor-pointer hover:text-red-600">دیسک های بازی</li>
        <li class="cursor-pointer hover:text-red-600">صندلی گیمینگ</li>
      </ul>
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          تبلت >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">تبلت ویندوزی</li>
        <li class="cursor-pointer hover:text-red-600">تبلت سامسونگ</li>
        <li class="cursor-pointer hover:text-red-600">تبلت سیائومی</li>
        <li class="cursor-pointer hover:text-red-600">تبلت نارتب</li>
      </ul>
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          آیپد >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">آیپد ایر</li>
        <li class="cursor-pointer hover:text-red-600">آیپد پرو</li>
      </ul>
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          انتخاب مانیتور >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">مانیتور OLED</li>
        <li class="cursor-pointer hover:text-red-600">قیمت مانیتور</li>
      </ul>
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
         اسپیکر >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">اسپیکر بلوتوثی</li>
        <li class="cursor-pointer hover:text-red-600">اسپیکر JBL</li>
        <li class="cursor-pointer hover:text-red-600">اسپیکر هارمن کاردن</li>
        <li class="cursor-pointer hover:text-red-600">اسپیکر سونی</li>
        <li class="cursor-pointer hover:text-red-600">اسپیکر تسکو</li>
        <li class="cursor-pointer hover:text-red-600">اسپیکر مکسیدر</li>
        <li class="cursor-pointer hover:text-red-600">اسپیکر میکرولب</li>
      </ul>



    </div>


    <!-- ستون دوم -->
    <div>

      <!-- هدفون -->
      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          هدفون >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">هدفون بی سیم</li>
        <li class="cursor-pointer hover:text-red-600">هدفون گیمینگ</li>
        <li class="cursor-pointer hover:text-red-600">هدفون انکر</li>
        <li class="cursor-pointer hover:text-red-600">هدفون اپل (ایرپاد)</li>
        <li class="cursor-pointer hover:text-red-600">هدفون بیتس</li>
        <li class="cursor-pointer hover:text-red-600">هدفون سونی</li>
        <li class="cursor-pointer hover:text-red-600">هدفون سامسونگ (ایربادز)</li>
        <li class="cursor-pointer hover:text-red-600">هدفون شیائومی</li>
        <li class="cursor-pointer hover:text-red-600">هدفون جی بی ال</li>
        <li class="cursor-pointer hover:text-red-600">هدفون ریزر</li>
      </ul>


      <!-- هدست -->
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          هدست >
        </h3>
      </div>


      <!-- ساعت هوشمند -->
      <div class="flex items-center gap-2 mb-5 pt-2">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          ساعت و هوشمند >
        </h3>
      </div>
       <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">ساعت هوشمند سامسونگ</li>
        <li class="cursor-pointer hover:text-red-600">ساعت هوشمند شیائومی</li>
        <li class="cursor-pointer hover:text-red-600">بند ساعت هوشمند</li>
        <li class="cursor-pointer hover:text-red-600">لوازم جانبی ساعت هوشمند</li>
      </ul>
      <div class="flex items-center gap-2 mb-5 pt-2">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
         اپل واچ >
        </h3>
      </div>
       <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">اپل واچ اولترا 3</li>
        <li class="cursor-pointer hover:text-red-600">اپل واچ اولترا 2</li>
        <li class="cursor-pointer hover:text-red-600">اپل واچ 11</li>
        <li class="cursor-pointer hover:text-red-600">اپل واچ 10 </li>
      </ul>
      <div class="flex items-center gap-2 mb-5 pt-2">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
        انتخاب پاوربانک >
        </h3>
      </div>
       <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">پاوربانک شیائومی</li>
        <li class="cursor-pointer hover:text-red-600">پاوربانک انکر</li>
        <li class="cursor-pointer hover:text-red-600">پاوربانک اپل</li>
        <li class="cursor-pointer hover:text-red-600">پاوربانک سامسونگ </li>
      </ul>
      <div class="flex items-center gap-2 mb-5 pt-2">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
        دوربین  >
        </h3>
      </div>
       <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">دوربین فیلم برداری</li>
        <li class="cursor-pointer hover:text-red-600">دوربین کنون</li>
        <li class="cursor-pointer hover:text-red-600">دوربین سونی</li>
        <li class="cursor-pointer hover:text-red-600">دوربین کامپکت </li>
        <li class="cursor-pointer hover:text-red-600">دوربین dslr </li>
        <li class="cursor-pointer hover:text-red-600">رینگ لایت</li>
        <li class="cursor-pointer hover:text-red-600">پایه دوربین</li>
        <li class="cursor-pointer hover:text-red-600">لنز دوربین</li>
        <li class="cursor-pointer hover:text-red-600">کارت حافظه</li>
      </ul>
       <div class="flex items-center gap-2 mb-5 pt-2">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
        فلش  >
        </h3>
      </div>
       <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">فلش 256 گیگ</li>
        <li class="cursor-pointer hover:text-red-600">فلش 128 گیگ</li>
        <li class="cursor-pointer hover:text-red-600">فلش 128 گیگ</li>
        <li class="cursor-pointer hover:text-red-600">فلش 64 گیگ</li>
        <li class="cursor-pointer hover:text-red-600">فلش 32 گیگ</li>
        <li class="cursor-pointer hover:text-red-600">فلش 16 گیگ</li>
      </ul>
      <div class="flex items-center gap-2 mb-5 pt-2">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
        باتری  >
        </h3>
      </div>
       <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">باتری لیتیومی</li>
        <li class="cursor-pointer hover:text-red-600">باتری قلمی</li>
      </ul>

    </div>


    <!-- ستون سوم -->
    <div>

      <!-- پرینتر -->
      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          پرینتر >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">پرینتر سه بعدی</li>
        <li class="cursor-pointer hover:text-red-600">پرینتر حرارتی</li>
        <li class="cursor-pointer hover:text-red-600">پرینتر رنگی</li>
        <li class="cursor-pointer hover:text-red-600">پرینتر لیزری</li>
        <li class="cursor-pointer hover:text-red-600">پرینتر اچ پی</li>
      </ul>


      <!-- ماشین‌های اداری -->
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          ماشین‌های اداری >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">کابل پرینتر</li>
        <li class="cursor-pointer hover:text-red-600">کارتریج</li>
        <li class="cursor-pointer hover:text-red-600">اسکنر</li>
        <li class="cursor-pointer hover:text-red-600">تلفن</li>
        <li class="cursor-pointer hover:text-red-600">تلفن ویپ</li>
        <li class="cursor-pointer hover:text-red-600">بارکدخوان</li>
        <li class="cursor-pointer hover:text-red-600">ویدئو وال</li>
        <li class="cursor-pointer hover:text-red-600">ویدئو پروژکتور</li>
        <li class="cursor-pointer hover:text-red-600">پیجر و سیستم نوبت دهی</li>
      </ul>
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          مودم  >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">مودم جیبی</li>
        <li class="cursor-pointer hover:text-red-600">مودم ایرانسل</li>
        <li class="cursor-pointer hover:text-red-600">مودم همراه اول</li>
        <li class="cursor-pointer hover:text-red-600">توسعه دهنده محدوده بی سیم</li>
        <li class="cursor-pointer hover:text-red-600">روتر و اکسس پوینت</li>
      </ul>
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          تجهیزات امنیتی   >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">دوربین مدار بسته</li>
        <li class="cursor-pointer hover:text-red-600">پایه دوبین مدار بسته</li>
        <li class="cursor-pointer hover:text-red-600">ماکت دوربین مدار بسته</li>
      </ul>

    </div>


    <!-- ستون چهارم -->
    <div>

      <!-- قطعات کامپیوتر -->
      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          قطعات کامپیوتر >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">پردازنده (CPU)</li>
        <li class="cursor-pointer hover:text-red-600">کارت گرافیک</li>
        <li class="cursor-pointer hover:text-red-600">مادربرد</li>
        <li class="cursor-pointer hover:text-red-600">رم کامپیوتر</li>
        <li class="cursor-pointer hover:text-red-600">کیس کامپیوتر</li>
        <li class="cursor-pointer hover:text-red-600">دانگل بلوتوث</li>
        <li class="cursor-pointer hover:text-red-600">خمیر سیلیکون</li>
      </ul>


      <!-- کیبورد -->
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          کیبورد >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">کیبورد گیمینگ</li>
        <li class="cursor-pointer hover:text-red-600">کیبورد بی سیم</li>
        <li class="cursor-pointer hover:text-red-600">کیبورد مکانیکال</li>
      </ul>


      <!-- ماوس -->
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          ماوس >
        </h3>
      </div>
      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">موس گیمینگ</li>
        <li class="cursor-pointer hover:text-red-600">موس بی سیم</li>
      </ul>
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          خانه هوشمند >
        </h3>
      </div>
      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">نور و روشنایی هوشمند</li>
        <li class="cursor-pointer hover:text-red-600">کلید و پریز هوشمند</li>
        <li class="cursor-pointer hover:text-red-600">سنسور هوشمند</li>
        <li class="cursor-pointer hover:text-red-600">جارو هوشمند</li>
      </ul>

    </div>

  </div>
</div>
<!-- زیرمنوی خانه و آشپزخانه -->
<div
  data-submenu="home"
  class="hidden w-full h-full px-8 py-6 max-h-[600px] overflow-y-auto"
  style="direction: ltr;"
>

  <!-- عنوان -->
  <div class="mb-8" style="direction: rtl;">
    <h2
      class="font-[Vazirmatn] font-semibold text-blue-900 cursor-pointer"
    >
      همه محصولات خانه و آشپزخانه >
    </h2>
  </div>


  <!-- ستون‌ها -->
  <div
    class="grid grid-cols-3 gap-10"
    style="direction: rtl;"
  >

    <!-- ستون اول -->
    <div>

      <!-- ظروف پخت و پز -->
      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          ظروف پخت و پز >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">قابلمه و تابه</li>
        <li class="cursor-pointer hover:text-red-600">زودپز</li>
        <li class="cursor-pointer hover:text-red-600">سرویس پخت و پز</li>
      </ul>


      <!-- ابزار آشپزی -->
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          ابزار آشپزی >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">ست کفگیر و ملاقه</li>
        <li class="cursor-pointer hover:text-red-600">چاقو</li>
        <li class="cursor-pointer hover:text-red-600">تخته گوشت</li>
        <li class="cursor-pointer hover:text-red-600">ظرف و قالب یخ</li>
        <li class="cursor-pointer hover:text-red-600">قیف</li>
        <li class="cursor-pointer hover:text-red-600">صافی</li>
        <li class="cursor-pointer hover:text-red-600">گردو شکن</li>
        <li class="cursor-pointer hover:text-red-600">فندک آشپزخانه</li>
        <li class="cursor-pointer hover:text-red-600">ترازوی آشپزخانه</li>
      </ul>
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
         چای و قهوه >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">قهوه ساز و دمنوش ساز</li>
        <li class="cursor-pointer hover:text-red-600">سماور</li>
        <li class="cursor-pointer hover:text-red-600">شیر جوش - قهوه جوش</li>
        <li class="cursor-pointer hover:text-red-600">قوری</li>
        <li class="cursor-pointer hover:text-red-600">فیلتر چای</li>
      </ul>
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
        ظروف آشپزخانه >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">آبکش و آبگیر</li>
        <li class="cursor-pointer hover:text-red-600">بطری</li>
        <li class="cursor-pointer hover:text-red-600">جای ادویه</li>
        <li class="cursor-pointer hover:text-red-600">شکر پاش و نمک پاش</li>
        <li class="cursor-pointer hover:text-red-600">سبد آشپزخانه</li>
        <li class="cursor-pointer hover:text-red-600">سبد سیب زمینی و پیاز</li>
        <li class="cursor-pointer hover:text-red-600">ظرف نگهدارنده</li>
      </ul>
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
        لوازم تهیه کیک و دسر  >
        </h3>
      </div>
      <div class="flex items-center gap-2 mb-5 pt-2">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
        سرو و پذیرایی  >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">سفره</li>
        <li class="cursor-pointer hover:text-red-600">ماگ</li>
        <li class="cursor-pointer hover:text-red-600">سینی</li>
        <li class="cursor-pointer hover:text-red-600">لیوان</li>
        <li class="cursor-pointer hover:text-red-600">بشقاب</li>
        <li class="cursor-pointer hover:text-red-600">قندان</li>
        <li class="cursor-pointer hover:text-red-600">پارچ و بطری</li>
        <li class="cursor-pointer hover:text-red-600">بستنی خوری</li>
        <li class="cursor-pointer hover:text-red-600">سس خوری و آبلیمو خوری</li>
        <li class="cursor-pointer hover:text-red-600">کاسه و پیاله</li>
        <li class="cursor-pointer hover:text-red-600">کلمن و فلاسک</li>
        <li class="cursor-pointer hover:text-red-600">ظروف سرو</li>
        <li class="cursor-pointer hover:text-red-600">سرویس غذاخوری</li>
        <li class="cursor-pointer hover:text-red-600">قاشق، چنگال و کارد</li>
        <li class="cursor-pointer hover:text-red-600">زیر لیوانی ، زیر قابلمه ای</li>
        <li class="cursor-pointer hover:text-red-600">ابزار مهمانی</li>
      </ul>
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
           منسوجات آشپزخانه >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">دستگیره</li>
        <li class="cursor-pointer hover:text-red-600">پیش بند</li>
        <li class="cursor-pointer hover:text-red-600">کیسه نان و سبزی</li>
        <li class="cursor-pointer hover:text-red-600">دستمال نظافت</li>
      </ul>


    </div>


    <!-- ستون دوم -->
    <div>

      <!-- مبل -->
      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          مبل >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">مبل راحتی</li>
        <li class="cursor-pointer hover:text-red-600">مبل تختخواب شو</li>
        <li class="cursor-pointer hover:text-red-600">مبل بادی</li>
        <li class="cursor-pointer hover:text-red-600">مبل تکی</li>
        <li class="cursor-pointer hover:text-red-600">مبل ال</li>
        <li class="cursor-pointer hover:text-red-600">مبل مینیمال</li>
        <li class="cursor-pointer hover:text-red-600">مبل چستر</li>
        <li class="cursor-pointer hover:text-red-600">مبل اداری و صندلی انتظار</li>
        <li class="cursor-pointer hover:text-red-600">پاف</li>
        <li class="cursor-pointer hover:text-red-600">صندلی کودک</li>
      </ul>


      <!-- دکوراسیون خانگی -->
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          دکوراسیون خانگی >
        </h3>
      </div>
      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">کتابخانه</li>
        <li class="cursor-pointer hover:text-red-600">شلف و طبقه</li>
        <li class="cursor-pointer hover:text-red-600">کنسول</li>
        <li class="cursor-pointer hover:text-red-600">صندلی</li>
        <li class="cursor-pointer hover:text-red-600">میز تلویزین</li>
        <li class="cursor-pointer hover:text-red-600">میز ناهارخوری</li>
      </ul>
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
           مبلمان و دکوراسیون >
        </h3>
      </div>
      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">صندلی اداری</li>
        <li class="cursor-pointer hover:text-red-600">میز اداری</li>
      </ul>
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
             نگهدارنده لباس و لوازم >
        </h3>
      </div>
      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">رگال لباس</li>
        <li class="cursor-pointer hover:text-red-600">کمد لباس</li>
        <li class="cursor-pointer hover:text-red-600">جاکفشی</li>
        <li class="cursor-pointer hover:text-red-600">جالباسی</li>
        <li class="cursor-pointer hover:text-red-600">کاور لوازم خانگی</li>
      </ul>
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
                دکوراتیو >
        </h3>
      </div>
      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">مجسمه و تندیس</li>
        <li class="cursor-pointer hover:text-red-600">ساعت</li>
        <li class="cursor-pointer hover:text-red-600">عود</li>
        <li class="cursor-pointer hover:text-red-600">شمع</li>
        <li class="cursor-pointer hover:text-red-600">شمعدان</li>
        <li class="cursor-pointer hover:text-red-600">دیوارکوب</li>
        <li class="cursor-pointer hover:text-red-600">اسماج</li>
        <li class="cursor-pointer hover:text-red-600">گل و گلدان</li>
        <li class="cursor-pointer hover:text-red-600">آیینه</li>
      </ul>
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
                نور و روشنایی >
        </h3>
      </div>
      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">آباژور</li>
        <li class="cursor-pointer hover:text-red-600">لوستر</li>
        <li class="cursor-pointer hover:text-red-600">لامپ و چراغ</li>
      </ul>
       <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
             کفپوش و دیوارپوش >
        </h3>
      </div>
      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">پوستر و کاغذ دیواری</li>
        <li class="cursor-pointer hover:text-red-600">پارکت</li>
        <li class="cursor-pointer hover:text-red-600">استیکر و پوستر</li>
        <li class="cursor-pointer hover:text-red-600">پرده</li>
      </ul>
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
           فرش و گلیم >
        </h3>
      </div>
      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">فرش</li>
        <li class="cursor-pointer hover:text-red-600">موکت</li>
        <li class="cursor-pointer hover:text-red-600">تابلو فرش</li>
        <li class="cursor-pointer hover:text-red-600">پادری</li>
        <li class="cursor-pointer hover:text-red-600">روفرشی</li>
      </ul>

    </div>


    <!-- ستون سوم -->
    <div>

      <!-- حمام -->
      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          حمام >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">حوله</li>
        <li class="cursor-pointer hover:text-red-600">دمپایی</li>
        <li class="cursor-pointer hover:text-red-600">لیف</li>
        <li class="cursor-pointer hover:text-red-600">پرده حمام</li>
        <li class="cursor-pointer hover:text-red-600">وان و جکوزی</li>
        <li class="cursor-pointer hover:text-red-600">ابزار حمام</li>
      </ul>


      <!-- سرویس بهداشتی -->
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          سرویس بهداشتی >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">توالت فرنگی</li>
        <li class="cursor-pointer hover:text-red-600">ست سرویس بهداشتی</li>
        <li class="cursor-pointer hover:text-red-600">روشویی</li>
        <li class="cursor-pointer hover:text-red-600">جامسواکی</li>
        <li class="cursor-pointer hover:text-red-600">آیینه سرویس بهداشتی</li>
        <li class="cursor-pointer hover:text-red-600">فلاش تانک</li>
        <li class="cursor-pointer hover:text-red-600">مخزن مایع دستشویی</li>
        <li class="cursor-pointer hover:text-red-600">پایه رول دستمال</li>
        <li class="cursor-pointer hover:text-red-600">توالت ایرانی</li>
        <li class="cursor-pointer hover:text-red-600">آفتابه</li>
      </ul>
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
           خواب >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">تخت خواب</li>
        <li class="cursor-pointer hover:text-red-600">لحاف</li>
        <li class="cursor-pointer hover:text-red-600">روتختی</li>
        <li class="cursor-pointer hover:text-red-600">سرویس خواب</li>
        <li class="cursor-pointer hover:text-red-600">ملحفه</li>
        <li class="cursor-pointer hover:text-red-600">بالش</li>
        <li class="cursor-pointer hover:text-red-600">تشک</li>
        <li class="cursor-pointer hover:text-red-600">رو بالشی</li>
        <li class="cursor-pointer hover:text-red-600">تشک خوشخواب</li>
        <li class="cursor-pointer hover:text-red-600">پتو</li>
      </ul>
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
            شستشو و نظافت >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">سطل</li>
        <li class="cursor-pointer hover:text-red-600">تی</li>
        <li class="cursor-pointer hover:text-red-600">فرچه</li>
        <li class="cursor-pointer hover:text-red-600">جارو و خاک انداز</li>
      </ul>

    </div>

  </div>
</div>
<!-- زیرمنوی لوازم خانگی برقی -->
<div
  data-submenu="appliances"
  class="hidden w-full h-full px-8 py-6 max-h-[600px] overflow-y-auto"
  style="direction: ltr;"
>

  <!-- عنوان -->
  <div class="mb-8" style="direction: rtl;">
    <h2 class="font-[Vazirmatn] font-semibold text-blue-900 cursor-pointer">
      همه محصولات لوازم خانگی برقی >
    </h2>
  </div>

  <!-- محتوا -->
  <div
    class="grid grid-cols-4 gap-10"
    style="direction: rtl;"
  >

    <!-- ستون اول از سمت راست: جاروبرقی -->
    <div>

      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>
        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          جهیزیه >
        </h3>
      </div>
      <div class="flex items-center gap-2 mb-5 pt-2">
        <span class="w-[1.5px] h-4 bg-red-600"></span>
        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          تهویه، سرمایش و گرمایش >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">هیتر و بخاری برقی</li>
        <li class="cursor-pointer hover:text-red-600">شوفاژ برقی</li>
        <li class="cursor-pointer hover:text-red-600">رادیاتور</li>
        <li class="cursor-pointer hover:text-red-600">تصفیه کننده هوا</li>
        <li class="cursor-pointer hover:text-red-600">کولر سلولزی</li>
        <li class="cursor-pointer hover:text-red-600">کولر گازی</li>
        <li class="cursor-pointer hover:text-red-600">کولر آبی</li>
        <li class="cursor-pointer hover:text-red-600">پنکه</li>
        <li class="cursor-pointer hover:text-red-600">پنکه شارژی</li>
        <li class="cursor-pointer hover:text-red-600">پکیج دیواری</li>
        <li class="cursor-pointer hover:text-red-600">آّگرمکن</li>
        <li class="cursor-pointer hover:text-red-600">بخاری گازی</li>
      </ul>
      <div class="flex items-center gap-2 mb-5 pt-2">
        <span class="w-[1.5px] h-4 bg-red-600"></span>
        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
         ماشین لباسشویی >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">ماشین لباسشویی ال جی</li>
        <li class="cursor-pointer hover:text-red-600">ماشین لباسشویی دوو</li>
        <li class="cursor-pointer hover:text-red-600">ماشین لباسشویی ایکس ویژن</li>
        <li class="cursor-pointer hover:text-red-600">ماشین لباسشویی پاکشوما</li>
        <li class="cursor-pointer hover:text-red-600">ماشین لباسشویی اسنوا</li>
      </ul>
      <div class="flex items-center gap-2 mb-5 pt-2">
        <span class="w-[1.5px] h-4 bg-red-600"></span>
        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          جاروبرقی >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">جاروبرقی رباتبک</li>
        <li class="cursor-pointer hover:text-red-600">جاروبرقی شارژی</li>
        <li class="cursor-pointer hover:text-red-600">لوازم جانبی جاروبرقی</li>
      </ul>
      <div class="flex items-center gap-2 mb-5 pt-2">
        <span class="w-[1.5px] h-4 bg-red-600"></span>
        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          ماشین ظرفشویی >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">ماشین ظرفشویی بوش</li>
        <li class="cursor-pointer hover:text-red-600">ماشین ظرفشویی ال جی</li>
        <li class="cursor-pointer hover:text-red-600">ماشین ظرفشویی دوو</li>
        <li class="cursor-pointer hover:text-red-600">ماشین ظرفشویی ایکس ویژن</li>
      </ul>
      <div class="flex items-center gap-2 mb-5 pt-2">
        <span class="w-[1.5px] h-4 bg-red-600"></span>
        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
           صوتی و تصویری >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">رادیو</li>
        <li class="cursor-pointer hover:text-red-600">ساندبار</li>
        <li class="cursor-pointer hover:text-red-600">ویدیو پروژکتور</li>
        <li class="cursor-pointer hover:text-red-600">اندروید باکس</li>
        <li class="cursor-pointer hover:text-red-600">پخش کننده خانگی</li>
        <li class="cursor-pointer hover:text-red-600">لوازم جانبی صوتی و تصویری</li>
        <li class="cursor-pointer hover:text-red-600">ریموت کنترل</li>
      </ul>


    </div>


    <!-- ستون دوم: یخچال و تلویزیون -->
    <div>

      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>
        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          یخچال فریزر >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">یخچال فریزر ساید بای ساید</li>
        <li class="cursor-pointer hover:text-red-600">یخچال فریزر دوقلو</li>
        <li class="cursor-pointer hover:text-red-600">یخچال فریزر هتلی</li>
        <li class="cursor-pointer hover:text-red-600">یخچال فریزر بالا پایین (کمبی)</li>
      </ul>


      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>
        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          تلویزیون >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">تلویزیون سونی</li>
        <li class="cursor-pointer hover:text-red-600">تلویزیون هایسنس</li>
        <li class="cursor-pointer hover:text-red-600">تلویزیون جی پلاس</li>
        <li class="cursor-pointer hover:text-red-600">تلویزیون ایکس ویژن</li>
        <li class="cursor-pointer hover:text-red-600">تلویزیون اندروید</li>
        <li class="cursor-pointer hover:text-red-600">تلویزیون 4k</li>
        <li class="cursor-pointer hover:text-red-600">تلویزیون گیمینگ</li>
      </ul>
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>
        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
         تلویزیون براساس سایز >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">تلویزیون 85 اینچ</li>
        <li class="cursor-pointer hover:text-red-600">تلویزیون 75 اینچ</li>
        <li class="cursor-pointer hover:text-red-600">تلویزیون 70 اینچ </li>
        <li class="cursor-pointer hover:text-red-600">تلویزیون 65 اینچ </li>
        <li class="cursor-pointer hover:text-red-600">تلویزیون 55 اینچ</li>
        <li class="cursor-pointer hover:text-red-600">تلویزیون 50 اینچ</li>
      </ul>

    </div>


    <!-- ستون سوم: لوازم پخت و پز -->
    <div>

      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>
        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          لوازم پخت و پز >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">تخم مرغ پز</li>
        <li class="cursor-pointer hover:text-red-600">سرخ کن بدون روغن (air fryer)</li>
        <li class="cursor-pointer hover:text-red-600">مایکروویو، مایکروفر</li>
        <li class="cursor-pointer hover:text-red-600">اجاق گاز</li>
        <li class="cursor-pointer hover:text-red-600">پلوپز</li>
        <li class="cursor-pointer hover:text-red-600">ساندویچ ساز و وافل ساز</li>
        <li class="cursor-pointer hover:text-red-600">آون توستر</li>
        <li class="cursor-pointer hover:text-red-600">گریل و باربیکیو</li>
        <li class="cursor-pointer hover:text-red-600">توستر</li>
      </ul>


      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>
        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          اتو >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">اتو پرس</li>
        <li class="cursor-pointer hover:text-red-600">اتو بخار</li>
        <li class="cursor-pointer hover:text-red-600">اتو ایستاده</li>
      </ul>
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>
        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          نوشیدنی ساز >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">قهوه ساز</li>
        <li class="cursor-pointer hover:text-red-600">اسپرسو ساز</li>
        <li class="cursor-pointer hover:text-red-600">چای ساز</li>
        <li class="cursor-pointer hover:text-red-600">کتری برقی</li>
        <li class="cursor-pointer hover:text-red-600">سماور برقی</li>
        <li class="cursor-pointer hover:text-red-600">آبسرد کن</li>
        <li class="cursor-pointer hover:text-red-600">آبمیوه گیری</li>
        <li class="cursor-pointer hover:text-red-600">آسیاب قهوه</li>
      </ul>

    </div>


    <!-- ستون چهارم از سمت راست: خردکن -->
    <div>

      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>
        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          خردکن و غذاساز >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">گوشت کوب برقی</li>
        <li class="cursor-pointer hover:text-red-600">غذاساز</li>
        <li class="cursor-pointer hover:text-red-600">همزن</li>
        <li class="cursor-pointer hover:text-red-600">مخلوط کن</li>
        <li class="cursor-pointer hover:text-red-600">چرخ گوشت</li>
        <li class="cursor-pointer hover:text-red-600">خردکن</li>
        <li class="cursor-pointer hover:text-red-600">آسیاب</li>
      </ul>


      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>
        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          بخارشوی >
        </h3>
      </div>


      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>
        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          تصفیه آب >
        </h3>
      </div>

      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li>فیلتر تصفیه آب</li>
      </ul>


      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>
        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          لوازم توکار >
        </h3>
      </div>
      <ul class="space-y-4 text-sm text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">فر</li>
        <li class="cursor-pointer hover:text-red-600">هود</li>
        <li class="cursor-pointer hover:text-red-600">گاز صفحه ای</li>
        <li class="cursor-pointer hover:text-red-600">سینک ظرفشویی</li>
      </ul>

    </div>

  </div>
</div>
<!-- زیرمنوی آرایشی بهداشتی -->
<div
  data-submenu="beauty"
  class="hidden w-full h-full px-8 py-6 max-h-[600px] overflow-y-auto"
  style="direction: ltr;"
>

  <!-- عنوان -->
  <div class="mb-8" style="direction: rtl;">
    <h2
      class="font-[Vazirmatn] font-semibold text-blue-900 cursor-pointer"
    >
      همه محصولات آرایشی بهداشتی >
      
    </h2>
  </div>


  <!-- چهار ستون -->
  <div
    class="grid grid-cols-4 gap-10"
    style="direction: rtl;"
  >


    <!-- ستون اول -->
    <div>

      <!-- مراقبت پوست -->
      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer">
          مراقبت پوست >
          
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">ضد آفتاب</li>
        <li class="cursor-pointer hover:text-red-600">کرم مرطوب کننده و نرم کننده</li>
        <li class="cursor-pointer hover:text-red-600">ماسک صورت و بدن</li>
        <li class="cursor-pointer hover:text-red-600">پاک کننده صورت</li>
        <li class="cursor-pointer hover:text-red-600">تونر</li>
        <li class="cursor-pointer hover:text-red-600">مراقبت بدن</li>
        <li class="cursor-pointer hover:text-red-600">ابزار مراقبت پوست</li>
      </ul>


      <!-- لوازم آرایشی -->
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer">
          لوازم آرایشی >
          
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">بهداشت و زیبایی ناخن</li>
        <li class="cursor-pointer hover:text-red-600">ابزار آرایشی</li>
      </ul>


      <!-- آرایش صورت -->
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer">
          آرایش صورت >
          
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">کرم پودر</li>
        <li class="cursor-pointer hover:text-red-600">رژگونه</li>
        <li class="cursor-pointer hover:text-red-600">کانسیلر</li>
        <li class="cursor-pointer hover:text-red-600">کانتور</li>
      </ul>

    </div>


    <!-- ستون دوم -->
    <div>

      <!-- پاک کننده آرایش صورت -->
      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer">
          پاک کننده آرایش صورت >
          
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">پاک کننده آرایش صورت پوست خشک</li>
        <li class="cursor-pointer hover:text-red-600">پاک کننده آرایش صورت چرب</li>
        <li class="cursor-pointer hover:text-red-600">میسلار واتر</li>
      </ul>


      <!-- آرایش چشم -->
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer">
          آرایش چشم >
          
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">ریمل</li>
        <li class="cursor-pointer hover:text-red-600">خط چشم</li>
        <li class="cursor-pointer hover:text-red-600">مداد چشم</li>
      </ul>


      <!-- آرایش لب -->
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer">
          آرایش لب >
          
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">مداد لب</li>
        <li class="cursor-pointer hover:text-red-600">بالم لب</li>
        <li class="cursor-pointer hover:text-red-600">تینت لب</li>
      </ul>


      <!-- مراقبت و زیبایی مو -->
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer">
          مراقبت و زیبایی مو >
          
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">مراقبت مو</li>
        <li class="cursor-pointer hover:text-red-600">آرایش مو</li>
        <li class="cursor-pointer hover:text-red-600">نرم کننده مو</li>
        <li class="cursor-pointer hover:text-red-600">شامپو مو</li>
      </ul>

    </div>


    <!-- ستون سوم -->
    <div>

      <!-- لوازم بهداشتی -->
      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer">
          لوازم بهداشتی >
          
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">مراقبت دهان و دندان</li>
        <li class="cursor-pointer hover:text-red-600">مسواک</li>
        <li class="cursor-pointer hover:text-red-600">خمیر دندان</li>
        <li class="cursor-pointer hover:text-red-600">دئودورانت و ضد تعریق</li>
        <li class="cursor-pointer hover:text-red-600">محصولات بهداشت جنسی</li>
        <li class="cursor-pointer hover:text-red-600">کاندوم</li>
        <li class="cursor-pointer hover:text-red-600">بهداشت و مراقبت شخصی</li>
        <li class="cursor-pointer hover:text-red-600">نوار بهداشتی</li>
        <li class="cursor-pointer hover:text-red-600">کاپ قاعدگی</li>
        <li class="cursor-pointer hover:text-red-600">لوازم اصلاح مو</li>
        <li class="cursor-pointer hover:text-red-600">تیغ و یدک اصلاح</li>
      </ul>


      <!-- شامپو بدن -->
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer">
          شامپو بدن >
          
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">شامپو بدن مردانه</li>
        <li class="cursor-pointer hover:text-red-600">شامپو بدن زنانه</li>
        <li class="cursor-pointer hover:text-red-600">شامپو بدن پوست چرب</li>
        <li class="cursor-pointer hover:text-red-600">شامپو بدن پوست خشک</li>
      </ul>

    </div>


    <!-- ستون چهارم -->
    <div>

      <!-- عطر و ادکلن -->
      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer">
          عطر و ادکلن >
          
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">عطر و ادکلن زنانه</li>
        <li class="cursor-pointer hover:text-red-600">عطر و ادکلن مردانه</li>
        <li class="cursor-pointer hover:text-red-600">بادی اسپلش</li>
        <li class="cursor-pointer hover:text-red-600">عطر جیبی</li>
      </ul>


      <!-- لوازم شخصی برقی -->
      <div class="flex items-center gap-2 mb-5 pt-6">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer">
          لوازم شخصی برقی >
          
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">سشوار</li>
        <li class="cursor-pointer hover:text-red-600" >اتو و حالت دهنده‌ی مو</li>
        <li class="cursor-pointer hover:text-red-600">اصلاح موی صورت</li>
        <li class="cursor-pointer hover:text-red-600">اصلاح موی سر</li>
        <li class="cursor-pointer hover:text-red-600">لوازم جانبی ماشین اصلاح</li>
      </ul>

    </div>

  </div>
</div>
<!-- زیرمنوی مد و پوشاک -->
<div
  data-submenu="fashion"
  class="hidden w-full h-full px-8 py-6 max-h-[600px] overflow-y-auto"
  style="direction: ltr;"
>

  <!-- عنوان -->
  <div class="mb-8" style="direction: rtl;">
    <h2
      class="font-[Vazirmatn] font-semibold text-blue-900 cursor-pointer"
    >
      همه محصولات مد و پوشاک >
    </h2>
  </div>


  <!-- چهار ستون -->
  <div
    class="grid grid-cols-4 gap-10"
    style="direction: rtl;"
  >


    <!-- ستون اول -->
    <div>

      <!-- پوشاک مردانه -->
      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          پوشاک مردانه >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">پالتو، بارانی و کاپشن مردانه</li>
        <li class="cursor-pointer hover:text-red-600">کاپشن مردانه</li>
        <li class="cursor-pointer hover:text-red-600">پالتو مردانه</li>
        <li class="cursor-pointer hover:text-red-600">کت چرم مردانه</li>
        <li class="cursor-pointer hover:text-red-600">پافر مردانه</li>
        <li class="cursor-pointer hover:text-red-600">لباس مردانه</li>
        <li class="cursor-pointer hover:text-red-600">هودی مردانه</li>
        <li class="cursor-pointer hover:text-red-600">سویشرت مردانه</li>
        <li class="cursor-pointer hover:text-red-600">ژاکت و پلیور مردانه</li>
        <li class="cursor-pointer hover:text-red-600">پولوشرت مردانه</li>
        <li class="cursor-pointer hover:text-red-600">شلوار مردانه</li>
        <li class="cursor-pointer hover:text-red-600">لباس زیر مردانه</li>
        <li class="cursor-pointer hover:text-red-600">تی شرت مردانه</li>
        <li class="cursor-pointer hover:text-red-600">پیراهن مردانه</li>
      </ul>


      <!-- کت و ست رسمی -->
      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          کت، جلیقه و ست رسمی مردانه >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">کت تک مردانه</li>
        <li class="cursor-pointer hover:text-red-600">کت شلوار مردانه</li>
        <li class="cursor-pointer hover:text-red-600">جلیقه مردانه</li>
      </ul>


      <!-- شلوار مردانه -->
      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          شلوار مردانه >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">شلوارک مردانه</li>
        <li class="cursor-pointer hover:text-red-600">شلوار اسلش مردانه</li>
        <li class="cursor-pointer hover:text-red-600">شلوار مام استایل مردانه</li>
        <li class="cursor-pointer hover:text-red-600">شلوار کارگو مردانه</li>
        <li class="cursor-pointer hover:text-red-600">شلوار جین مردانه</li>
        <li class="cursor-pointer hover:text-red-600">لباس راحتی مردانه</li>
        <li class="cursor-pointer hover:text-red-600">جوراب مردانه</li>
      </ul>

    </div>


    <!-- ستون دوم -->
    <div>

      <!-- کیف و کفش مردانه -->
      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          کیف مردانه >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">کیف پول مردانه</li>
      </ul>


      <!-- کفش مردانه -->
      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          کفش مردانه >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">نیم بوت مردانه</li>
        <li class="cursor-pointer hover:text-red-600">بوت مردانه</li>
        <li class="cursor-pointer hover:text-red-600">کفش اسپرت مردانه</li>
        <li class="cursor-pointer hover:text-red-600">کفش کالج مردانه</li>
        <li class="cursor-pointer hover:text-red-600">صندل مردانه</li>
        <li class="cursor-pointer hover:text-red-600">دمپایی مردانه</li>
        <li class="cursor-pointer hover:text-red-600">دمپایی لا انگشتی مردانه</li>
        <li class="cursor-pointer hover:text-red-600">گیوه مردانه</li>
      </ul>


      <!-- اکسسوری مردانه -->
      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          اکسسوری مردانه >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">عینک مردانه</li>
        <li class="cursor-pointer hover:text-red-600">کمربند و ساسبند مردانه</li>
        <li class="cursor-pointer hover:text-red-600">کلاه مردانه</li>
        <li class="cursor-pointer hover:text-red-600">کراوات و پاپیون مردانه</li>
      </ul>


      <!-- ورزشی مردانه -->
      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          ورزشی مردانه >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">لباس ورزشی مردانه</li>
        <li class="cursor-pointer hover:text-red-600">مایو مردانه</li>
        <li class="cursor-pointer hover:text-red-600">گرمکن و ست ورزشی مردانه</li>
        <li class="cursor-pointer hover:text-red-600">اکسسوری ورزشی مردانه</li>
        <li class="cursor-pointer hover:text-red-600">کفش ورزشی مردانه</li>
        <li class="cursor-pointer hover:text-red-600">پک هدیه مردانه</li>
      </ul>
      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          انبارتکانی پوشاک >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">ال سی وایکیکی</li>
        <li class="cursor-pointer hover:text-red-600">کاسیو</li>
        <li class="cursor-pointer hover:text-red-600">نوین چرم</li>
        <li class="cursor-pointer hover:text-red-600">وان بای وان</li>
        <li class="cursor-pointer hover:text-red-600">کروم</li>
        <li class="cursor-pointer hover:text-red-600">توریور</li>
        <li class="cursor-pointer hover:text-red-600">نوزده نود و یک</li>
        <li class="cursor-pointer hover:text-red-600">هامتو</li>
        <li class="cursor-pointer hover:text-red-600">چرم مشهد</li>
        <li class="cursor-pointer hover:text-red-600">اسمارا</li>
        <li class="cursor-pointer hover:text-red-600">سرژه</li>
        <li class="cursor-pointer hover:text-red-600">گردیه</li>
        <li class="cursor-pointer hover:text-red-600">چرم عطارد</li>
        <li class="cursor-pointer hover:text-red-600">تولیکا</li>
        <li class="cursor-pointer hover:text-red-600">پاما</li>
        <li class="cursor-pointer hover:text-red-600">آی تک</li>
        <li class="cursor-pointer hover:text-red-600">کلمبیا</li>
        <li class="cursor-pointer hover:text-red-600">چرم پاندورا</li>
        <li class="cursor-pointer hover:text-red-600">دیوید جونز</li>
        <li class="cursor-pointer hover:text-red-600">سارک</li>
        <li class="cursor-pointer hover:text-red-600">زیروتن</li>
        <li class="cursor-pointer hover:text-red-600">فلای (خانه مد پرواز)</li>
        <li class="cursor-pointer hover:text-red-600">هیبا استایل</li>
        <li class="cursor-pointer hover:text-red-600">برنس</li>
        <li class="cursor-pointer hover:text-red-600">چرم اورز</li>
      </ul>

    </div>


    <!-- ستون سوم -->
    <div>

      <!-- ساعت -->
      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          ساعت >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">ساعت عقربه ای زنانه</li>
        <li class="cursor-pointer hover:text-red-600">ساعت دیجیتال زنانه</li>
        <li class="cursor-pointer hover:text-red-600">ساعت عقربه ای دخترانه</li>
        <li class="cursor-pointer hover:text-red-600">ساعت دیجیتال دخترانه</li>
        <li class="cursor-pointer hover:text-red-600">ساعت عقربه ای مردانه</li>
        <li class="cursor-pointer hover:text-red-600">ساعت دیجیتال مردانه</li>
        <li class="cursor-pointer hover:text-red-600">ساعت دیجیتال پسرانه</li>
        <li class="cursor-pointer hover:text-red-600">ساعت عقربه ای پسرانه</li>
      </ul>


      <!-- عینک -->
      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          عینک >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">عینک آفتابی زنانه</li>
        <li class="cursor-pointer hover:text-red-600">عینک طبی زنانه</li>
        <li class="cursor-pointer hover:text-red-600">عینک آفتابی مردانه</li>
        <li class="cursor-pointer hover:text-red-600">عینک طبی مردانه</li>
      </ul>


      <!-- پوشاک زنانه -->
      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          پوشاک زنانه >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">پالتو، بارانی و کاپشن زنانه</li>
        <li class="cursor-pointer hover:text-red-600">کاپشن زنانه</li>
        <li class="cursor-pointer hover:text-red-600">پالتو زنانه</li>
        <li class="cursor-pointer hover:text-red-600">کت چرم زنانه</li>
        <li class="cursor-pointer hover:text-red-600">بارانی زنانه</li>
        <li class="cursor-pointer hover:text-red-600">پافر زنانه</li>
        <li class="cursor-pointer hover:text-red-600">لباس زنانه</li>
        <li class="cursor-pointer hover:text-red-600">هودی زنانه</li>
        <li class="cursor-pointer hover:text-red-600">سویشرت زنانه</li>
        <li class="cursor-pointer hover:text-red-600">بافت و پلیور و ژاکت زنانه</li>
        <li class="cursor-pointer hover:text-red-600">مانتو پانچو رویه</li>
        <li class="cursor-pointer hover:text-red-600">بلوز و شومیز زنانه</li>
        <li class="cursor-pointer hover:text-red-600">لباس راحتی زنانه</li>
        <li class="cursor-pointer hover:text-red-600">تاپ و نیم تنه زنانه</li>
        <li class="cursor-pointer hover:text-red-600">تیشرت زنانه</li>
        <li class="cursor-pointer hover:text-red-600">دامن زنانه</li>
        <li class="cursor-pointer hover:text-red-600">پیراهن و لباس مجلسی زنانه</li>
      </ul>
      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          پوشاک بچگانه >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">ست راحتی و خواب بچگانه</li>
        <li class="cursor-pointer hover:text-red-600">کیف و کوله و کفش بچگانه</li>
        <li class="cursor-pointer hover:text-red-600">لباس پسرانه</li>
        <li class="cursor-pointer hover:text-red-600">تیشرت پسرانه</li>
        <li class="cursor-pointer hover:text-red-600">پوشاک دخترانه</li>
        <li class="cursor-pointer hover:text-red-600">پوشاک نوزادی</li>
        <li class="cursor-pointer hover:text-red-600">ست لباس راحتی نوزاد</li>
        <li class="cursor-pointer hover:text-red-600">بادی نوزادی</li>
        <li class="cursor-pointer hover:text-red-600">ست نوزاد</li>
        <li class="cursor-pointer hover:text-red-600">سرهمی نوزاد</li>
      </ul>

    </div>


    <!-- ستون چهارم -->
    <div>

      <!-- لباس زیر زنانه -->
      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          لباس زیر زنانه >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">شورت زنانه</li>
        <li class="cursor-pointer hover:text-red-600">سوتین</li>
        <li class="cursor-pointer hover:text-red-600">گن زنانه</li>
        <li class="cursor-pointer hover:text-red-600">گن لیزری</li>
        <li class="cursor-pointer hover:text-red-600">گن ساعت شنی</li>
      </ul>


      <!-- شلوار زنانه -->
      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          شلوار و سرهمی زنانه >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">شلوار جین زنانه</li>
        <li class="cursor-pointer hover:text-red-600">لگینگ زنانه</li>
        <li class="cursor-pointer hover:text-red-600">شلوارک زنانه</li>
        <li class="cursor-pointer hover:text-red-600">شلوار کارگو زنانه</li>
        <li class="cursor-pointer hover:text-red-600">شلوار بگ زنانه</li>
        <li class="cursor-pointer hover:text-red-600">شلوار مام استایل زنانه</li>
      </ul>


      <!-- مانتو -->
      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          مانتو زنانه >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">مانتو کوتاه</li>
        <li class="cursor-pointer hover:text-red-600">مانتو بلند</li>
        <li class="cursor-pointer hover:text-red-600">مانتو جلو باز</li>
        <li class="cursor-pointer hover:text-red-600">مانتو کرپ</li>
        <li class="cursor-pointer hover:text-red-600">مانتو دکمه مخفی</li>
        <li class="cursor-pointer hover:text-red-600">مانتو مجلسی</li>
        <li class="cursor-pointer hover:text-red-600">مانتو ابروبادی</li>
        <li class="cursor-pointer hover:text-red-600">مانتو دکمه ای</li>
        <li class="cursor-pointer hover:text-red-600">مانتو جلو بسته</li>
        <li class="cursor-pointer hover:text-red-600">مانتو گیپور</li>
        <li class="cursor-pointer hover:text-red-600">مانتو مخمل</li>
        <li class="cursor-pointer hover:text-red-600">مانتو نخ</li>
        <li class="cursor-pointer hover:text-red-600">مانتو گل‌دار</li>
      </ul>


      <!-- لباس خواب و راحتی -->
      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          لباس خواب و راحتی زنانه >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">لباس خواب زنانه</li>
        <li class="cursor-pointer hover:text-red-600">بادی زنانه</li>
        <li class="cursor-pointer hover:text-red-600">ژاکت و پلیور زنانه</li>
        <li class="cursor-pointer hover:text-red-600">تاپ و نیم تنه زنانه</li>
        <li class="cursor-pointer hover:text-red-600">تونیک زنانه</li>
        <li class="cursor-pointer hover:text-red-600">تیشرت زنانه</li>
      </ul>


      <!-- لباس بارداری -->
      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          لباس بارداری >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">شلوار و سرهمی بارداری</li>
        <li class="cursor-pointer hover:text-red-600">پیراهن و لباس مجلسی بارداری</li>
      </ul>


      <!-- ورزشی زنانه -->
      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          ورزشی زنانه >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">لباس ورزشی زنانه</li>
        <li class="cursor-pointer hover:text-red-600">گرمکن و ست ورزشی زنانه</li>
        <li class="cursor-pointer hover:text-red-600">تاپ و نیم تنه ورزشی زنانه</li>
        <li class="cursor-pointer hover:text-red-600">شلوار و سرهمی ورزشی زنانه</li>
        <li class="cursor-pointer hover:text-red-600">مایو زنانه</li>
      </ul>


      <!-- کفش و کیف زنانه -->
      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          کفش زنانه >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">نیم بوت زنانه</li>
        <li class="cursor-pointer hover:text-red-600">بوت زنانه</li>
        <li class="cursor-pointer hover:text-red-600">کفش اسپرت زنانه</li>
        <li class="cursor-pointer hover:text-red-600">کفش کالج زنانه</li>
        <li class="cursor-pointer hover:text-red-600">صندل زنانه</li>
        <li class="cursor-pointer hover:text-red-600">دمپایی لاانگشتی زنانه</li>
        <li class="cursor-pointer hover:text-red-600">دمپایی زنانه</li>
        <li class="cursor-pointer hover:text-red-600">گیوه زنانه</li>
        <li class="cursor-pointer hover:text-red-600">کیف زنانه</li>
        <li class="cursor-pointer hover:text-red-600">اکسسوری زنانه</li>
        <li class="cursor-pointer hover:text-red-600">ست هدیه زنانه</li>
      </ul>

      

    </div>

  </div>
</div>
<!-- زیرمنوی طلا و نقره -->
<div
  data-submenu="gold"
  class="hidden w-full h-full px-8 py-6 max-h-[600px] overflow-y-auto"
  style="direction: ltr;"
>

  <!-- عنوان -->
  <div class="mb-8" style="direction: rtl;">
    <h2
      class="font-[Vazirmatn] font-semibold text-blue-900 cursor-pointer"
    >
      همه محصولات طلا و نقره >
    </h2>
  </div>


  <!-- سه ستون -->
  <div
    class="grid grid-cols-3 gap-10"
    style="direction: rtl;"
  >


    <!-- ستون اول -->
    <div>

      <!-- منتخب‌های امروز طلا -->
      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          منتخب‌های امروز طلا >
        </h3>
      </div>

      <!-- شمش طلا -->
      <div class="flex items-center gap-2 mb-5 pt-2">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          شمش طلا >
        </h3>
      </div>

      <!-- سکه طلا -->
      <div class="flex items-center gap-2 mb-5 pt-2">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          سکه طلا >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">ربع سکه</li>
        <li class="cursor-pointer hover:text-red-600">نیم سکه</li>
        <li class="cursor-pointer hover:text-red-600">سکه تمام</li>
        <li class="cursor-pointer hover:text-red-600">سکه پارسیان</li>
        <li class="cursor-pointer hover:text-red-600">سکه قسطی</li>
      </ul>

      <!-- طلای آب شده -->
      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          طلای آب شده >
        </h3>
      </div>

      <!-- گردنبند طلا زنانه -->
      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          گردنبند طلا زنانه >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">گردنبند مرواریدی زنانه</li>
        <li class="cursor-pointer hover:text-red-600">گردنبند چشم نظر</li>
        <li class="cursor-pointer hover:text-red-600">گردنبند ونکلیف</li>
        <li class="cursor-pointer hover:text-red-600">گردنبند اسم و حروف</li>
        <li class="cursor-pointer hover:text-red-600">گردنبند کارتیر</li>
        <li class="cursor-pointer hover:text-red-600">گردنبند ماه تولد</li>
        <li class="cursor-pointer hover:text-red-600">گردنبند رولباسی</li>
      </ul>


      <!-- انگشتر طلا زنانه -->
      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          انگشتر طلا زنانه >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">انگشتر نگین دار</li>
        <li class="cursor-pointer hover:text-red-600">انگشتر کارتیر</li>
        <li class="cursor-pointer hover:text-red-600">انگشتر ونکلیف</li>
        <li class="cursor-pointer hover:text-red-600">انگشتر ظریف</li>
        <li class="cursor-pointer hover:text-red-600">انگشتر چشم نظر</li>
        <li class="cursor-pointer hover:text-red-600">بند انگشتی طلا</li>
        <li class="cursor-pointer hover:text-red-600">انگشتر مرواریدی</li>
        <li class="cursor-pointer hover:text-red-600">انگشتر بدون نگین</li>
      </ul>

    </div>


    <!-- ستون دوم -->
    <div>

      <!-- گوشواره طلا -->
      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          گوشواره طلا >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">گوشواره بخیه ای</li>
        <li class="cursor-pointer hover:text-red-600">گوشواره کلیپسی</li>
        <li class="cursor-pointer hover:text-red-600">گوشواره میخی</li>
        <li class="cursor-pointer hover:text-red-600">گوشواره حلقه ای</li>
      </ul>


      <!-- دستبند طلا زنانه -->
      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          دستبند طلا زنانه >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">دستنبد کارتیر</li>
        <li class="cursor-pointer hover:text-red-600">دستبند چشم نظر</li>
        <li class="cursor-pointer hover:text-red-600">دستبند مرواریدی</li>
        <li class="cursor-pointer hover:text-red-600">دستبند چرم و طلا</li>
        <li class="cursor-pointer hover:text-red-600">دستبند تیفانی</li>
        <li class="cursor-pointer hover:text-red-600">دستنبد اسم و حروف</li>
      </ul>


      <!-- النگو -->
      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          النگو طلا زنانه >
        </h3>
      </div>


      <!-- زنجیر طلا -->
      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          زنجیر طلا >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">زنجیر فلامینگو</li>
        <li class="cursor-pointer hover:text-red-600">زنجیر ونیزی</li>
        <li class="cursor-pointer hover:text-red-600">زنجیر میرو</li>
        <li class="cursor-pointer hover:text-red-600">زنجیر تیغ ماهی</li>
      </ul>


      <!-- طلای کم اجرت -->
      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          طلای کم اجرت >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">گردنبند طلا کم اجرت (دست اول)</li>
        <li class="cursor-pointer hover:text-red-600">النگو طلا کم اجرت (دست اول)</li>
        <li class="cursor-pointer hover:text-red-600">دستبند طلا کم اجرت (دست اول)</li>
        <li class="cursor-pointer hover:text-red-600">گوشواره طلا کم اجرت (دست اول)</li>
      </ul>


      <!-- پابند -->
      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          پابند طلا >
        </h3>
      </div>


      <!-- پیرسینگ -->
      <div class="flex items-center gap-2 mb-5 pt-2">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          پیرسینگ طلا زنانه >
        </h3>
      </div>


      <!-- ست زیورآلات -->
      <div class="flex items-center gap-2 mb-5 pt-2">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          ست زیورآلات طلا زنانه >
        </h3>
      </div>


      <!-- اکسسوری -->
      <div class="flex items-center gap-2 mb-5 pt-2">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          اکسسوری طلا >
        </h3>
      </div>

    </div>


    <!-- ستون سوم -->
    <div>

      <!-- زیورآلات طلا مردانه -->
      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          زیورآلات طلا مردانه >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">انگشتر طلا مردانه</li>
        <li class="cursor-pointer hover:text-red-600">زنجیر طلا مردانه</li>
        <li class="cursor-pointer hover:text-red-600">گردنبند طلا مردانه</li>
        <li class="cursor-pointer hover:text-red-600">دستبند طلا مردانه</li>
        <li class="cursor-pointer hover:text-red-600">ست زیورآلات طلا مردانه</li>
      </ul>


      <!-- زیورآلات طلا زنانه و مردانه -->
      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          زیورآلات طلا زنانه و مردانه >
        </h3>
      </div>


      <!-- زیورآلات طلا بچگانه -->
      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          زیورآلات طلا بچگانه >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">دستبند طلا بچگانه</li>
        <li class="cursor-pointer hover:text-red-600">گوشواره طلا بچگانه</li>
        <li class="cursor-pointer hover:text-red-600">ست زیورآلات طلا بچگانه</li>
        <li class="cursor-pointer hover:text-red-600">گردنبند طلا بچگانه</li>
        <li class="cursor-pointer hover:text-red-600">آویز طلا بچگانه</li>
        <li class="cursor-pointer hover:text-red-600">انگشتر طلا بچگانه</li>
        <li class="cursor-pointer hover:text-red-600">گل سینه طلا بچگانه</li>
      </ul>


      <!-- شمش نقره -->
      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          شمش نقره >
        </h3>
      </div>


      <!-- اکسسوری نقره -->
      <div class="flex items-center gap-2 mb-5 pt-2">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          اکسسوری نقره >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li>آویز ساعت نقره</li>
      </ul>


      <!-- گل سینه طلا زنانه -->
      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          گل سینه طلا زنانه >
        </h3>
      </div>


      <!-- زیورآلات نقره زنانه -->
      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          زیورآلات نقره زنانه >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">انگشتر نقره زنانه</li>
        <li class="cursor-pointer hover:text-red-600">دستبند نقره زنانه</li>
        <li class="cursor-pointer hover:text-red-600">گردنبند نقره زنانه</li>
        <li class="cursor-pointer hover:text-red-600">زنجیر نقره زنانه</li>
        <li class="cursor-pointer hover:text-red-600">گوشواره نقره زنانه</li>
        <li class="cursor-pointer hover:text-red-600">پابند نقره زنانه</li>
        <li class="cursor-pointer hover:text-red-600">پیرسینگ نقره زنانه</li>
        <li class="cursor-pointer hover:text-red-600">آویز نقره زنانه</li>
      </ul>


      <!-- زیورآلات نقره مردانه -->
      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          زیورآلات نقره مردانه >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">انگشتر نقره مردانه</li>
        <li class="cursor-pointer hover:text-red-600">گردنبند نقره مردانه</li>
        <li class="cursor-pointer hover:text-red-600">زنجیر نقره مردانه</li>
        <li class="cursor-pointer hover:text-red-600">دستبند نقره مردانه</li>
      </ul>


      <!-- آویز طلا زنانه -->
      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          آویز طلا زنانه >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">آویز گل طلا</li>
        <li class="cursor-pointer hover:text-red-600">آویز ستاره طلا</li>
        <li class="cursor-pointer hover:text-red-600">آویز پروانه طلا</li>
        <li class="cursor-pointer hover:text-red-600">آویز قلب طلا</li>
        <li class="cursor-pointer hover:text-red-600">آویز اسم طلا</li>
        <li class="cursor-pointer hover:text-red-600">آویز طلای بی نهایت</li>
      </ul>

    </div>

  </div>
</div>
<!-- زیرمنوی خودرو و موتورسیکلت -->
<div
  data-submenu="car"
  class="hidden w-full h-full px-8 py-6 max-h-[600px] overflow-y-auto"
  style="direction: ltr;"
>

  <!-- عنوان -->
  <div class="mb-8" style="direction: rtl;">
    <h2
      class="font-[Vazirmatn] font-semibold text-blue-900 cursor-pointer"
    >
      همه محصولات خودرو و موتورسیکلت >
    </h2>
  </div>

  <!-- چهار ستون -->
  <div
    class="grid grid-cols-4 gap-10"
    style="direction: rtl;"
  >

    <!-- ستون اول -->
    <div>

      <!-- موتور سیکلت -->
      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>
        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          موتور سیکلت >
        </h3>
      </div>

      <!-- خودرو -->
      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>
        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          خودرو >
        </h3>
      </div>

      <!-- لوازم مصرفی خودرو -->
      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>
        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          لوازم مصرفی خودرو >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">روغن موتور</li>
        <li class="cursor-pointer hover:text-red-600">فیلترها</li>
        <li class="cursor-pointer hover:text-red-600">قطعات سرویسی</li>
        <li class="cursor-pointer hover:text-red-600">روغن گیربکس</li>
        <li class="cursor-pointer hover:text-red-600">روغن هیدرولیک</li>
        <li class="cursor-pointer hover:text-red-600">ضدیخ و آب رادیاتور</li>
        <li class="cursor-pointer hover:text-red-600">باتری</li>
        <li class="cursor-pointer hover:text-red-600">لاستیک</li>
        <li class="cursor-pointer hover:text-red-600">مکمل سوخت و روغن</li>
        <li class="cursor-pointer hover:text-red-600">واکس و پولیش</li>
        <li class="cursor-pointer hover:text-red-600">لوازم نظافت خودرو</li>
      </ul>

    </div>


    <!-- ستون دوم -->
    <div>

      <!-- لوازم یدکی خودرو -->
      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>
        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          لوازم یدکی خودرو >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">لوازم بدنه</li>
        <li class="cursor-pointer hover:text-red-600">چراغ</li>
        <li class="cursor-pointer hover:text-red-600">آینه جانبی</li>
        <li class="cursor-pointer hover:text-red-600">لوازم جلوبندی و تعلیق</li>
        <li class="cursor-pointer hover:text-red-600">لوازم الکترونیکی</li>
        <li class="cursor-pointer hover:text-red-600">لوازم مکانیکی</li>
      </ul>


      <!-- لوازم صوتی و تصویری -->
      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>
        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          لوازم صوتی و تصویری >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">دوربین ثبت وقایع خودرو</li>
        <li class="cursor-pointer hover:text-red-600">دستگاه پخش</li>
        <li class="cursor-pointer hover:text-red-600">بلندگو</li>
        <li class="cursor-pointer hover:text-red-600">آمپلی فایر</li>
        <li class="cursor-pointer hover:text-red-600">اف ام پلیر</li>
        <li class="cursor-pointer hover:text-red-600">مسیریاب خودرو</li>
        <li class="cursor-pointer hover:text-red-600">لوازم جانبی صوتی و تصویری</li>
      </ul>

    </div>


    <!-- ستون سوم -->
    <div>

      <!-- لوازم جانبی خودرو -->
      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>
        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          لوازم جانبی خودرو >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">کفپوش خودرو</li>
        <li class="cursor-pointer hover:text-red-600">دوربین ثبت وقایع خودرو</li>
        <li class="cursor-pointer hover:text-red-600">روکش صندلی</li>
        <li class="cursor-pointer hover:text-red-600">زنجیر چرخ</li>
        <li class="cursor-pointer hover:text-red-600">آفتابگیر خودرو</li>
        <li class="cursor-pointer hover:text-red-600">تجهیزات نظم دهنده</li>
        <li class="cursor-pointer hover:text-red-600">هدلایت</li>
        <li class="cursor-pointer hover:text-red-600">کفپوش صندوق خودرو</li>
        <li class="cursor-pointer hover:text-red-600">چادر خودرو</li>
        <li class="cursor-pointer hover:text-red-600">عایق کاپوت، صندوق و دربها</li>
        <li class="cursor-pointer hover:text-red-600">تجهیزات راحتی سرنشین</li>
        <li class="cursor-pointer hover:text-red-600">لوازم ضد سرقت</li>
        <li class="cursor-pointer hover:text-red-600">پا رکابی</li>
        <li class="cursor-pointer hover:text-red-600">اسپویلر و دیفیوزر</li>
        <li class="cursor-pointer hover:text-red-600">جاسوئیچی</li>
        <li class="cursor-pointer hover:text-red-600">خوشبوکننده و تصفیه کننده هوای کابین</li>
      </ul>

    </div>


    <!-- ستون چهارم -->
    <div>

      <!-- ادامه لوازم جانبی خودرو -->
      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>
        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          لوازم جانبی خودرو >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">باربند</li>
        <li class="cursor-pointer hover:text-red-600">سر اگزوز</li>
        <li class="cursor-pointer hover:text-red-600">سر دنده</li>
        <li class="cursor-pointer hover:text-red-600">لوازم تزئینی خودرو</li>
        <li class="cursor-pointer hover:text-red-600">تجهیزات آفرود</li>
        <li class="cursor-pointer hover:text-red-600">تیونینگ و تقویت موتور</li>
        <li class="cursor-pointer hover:text-red-600">جک خودرو</li>
        <li class="cursor-pointer hover:text-red-600">کمربند ایمنی</li>
        <li class="cursor-pointer hover:text-red-600">آنتن خودرو</li>
        <li class="cursor-pointer hover:text-red-600">والف لاستیک</li>
        <li class="cursor-pointer hover:text-red-600">بوق خودرو</li>
        <li class="cursor-pointer hover:text-red-600">غربیلک فرمان</li>
        <li class="cursor-pointer hover:text-red-600">سایر لوازم جانبی</li>
      </ul>


      <!-- لوازم موتور سیکلت -->
      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>
        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          لوازم موتور سیکلت >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">لوازم مصرفی</li>
        <li class="cursor-pointer hover:text-red-600">لوازم یدکی</li>
        <li class="cursor-pointer hover:text-red-600">لوازم جانبی</li>
        <li class="cursor-pointer hover:text-red-600">لوازم ضد سرقت</li>
      </ul>


      <!-- لوازم بر اساس نوع خودرو -->
      <div class="flex items-center gap-2 mb-5 pt-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>
        <h3
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600"
        >
          لوازم بر اساس نوع خودرو >
        </h3>
      </div>

      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
        <li class="cursor-pointer hover:text-red-600">206-207</li>
        <li class="cursor-pointer hover:text-red-600">L90-ساندرو</li>
        <li class="cursor-pointer hover:text-red-600">پرشیا-پژو 405</li>
        <li class="cursor-pointer hover:text-red-600">پراید-تیبا</li>
        <li class="cursor-pointer hover:text-red-600">سمند-دنا</li>
        <li class="cursor-pointer hover:text-red-600">کوئیک-ساینا</li>
        <li class="cursor-pointer hover:text-red-600">زانتیا-برلیانس</li>
        <li class="cursor-pointer hover:text-red-600">MVM-فونیکس</li>
        <li class="cursor-pointer hover:text-red-600">جک-لیفان</li>
        <li class="cursor-pointer hover:text-red-600">هیوندای-کیا</li>
        <li class="cursor-pointer hover:text-red-600">تویوتا-رنو</li>
      </ul>

    </div>

  </div>
</div>
<!-- زیرمنوی سلامت و پزشکی -->
<div 
  data-submenu="health" 
  class="hidden w-full h-full px-8 py-6 max-h-[600px] overflow-y-auto" 
  style="direction: ltr;" 
> 
 
  <!-- عنوان --> 
  <div class="mb-8" style="direction: rtl;"> 
    <h2 
      class="font-[Vazirmatn] font-semibold text-blue-900 cursor-pointer" 
    > 
      همه محصولات سلامت و پزشکی > 
    </h2> 
  </div> 
 
  <!-- سه ستون --> 
  <div 
    class="grid grid-cols-3 gap-10" 
    style="direction: rtl;" 
  > 
 
    <!-- ستون اول --> 
    <div> 
 
      <!-- تجهیزات پزشکی --> 
      <div class="flex items-center gap-2 mb-5"> 
        <span class="w-[1.5px] h-4 bg-red-600"></span> 
        <h3 
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600" 
        > 
          تجهیزات پزشکی > 
        </h3> 
      </div> 
 
      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]"> 
        <li class="cursor-pointer hover:text-red-600">فشارسنج</li> 
        <li class="cursor-pointer hover:text-red-600">دماسنج محیطی</li> 
        <li class="cursor-pointer hover:text-red-600">ترازو</li> 
        <li class="cursor-pointer hover:text-red-600">تب سنج و دماسنج</li> 
        <li class="cursor-pointer hover:text-red-600">رطوبت‌ گیر</li> 
        <li class="cursor-pointer hover:text-red-600">پد و کیسه آب گرم</li> 
        <li class="cursor-pointer hover:text-red-600">تشک و پتوی برقی</li> 
        <li class="cursor-pointer hover:text-red-600">ماسک تنفسی</li> 
        <li class="cursor-pointer hover:text-red-600">کیسه نمک-درد</li> 
        <li class="cursor-pointer hover:text-red-600">تجهیزات پزشکی حرفه ای</li> 
        <li class="cursor-pointer hover:text-red-600">لوازم پزشک</li> 
      </ul> 
 
 
      <!-- تجهیزات پزشکی تنفسی --> 
      <div class="flex items-center gap-2 mb-5 pt-5"> 
        <span class="w-[1.5px] h-4 bg-red-600"></span> 
        <h3 
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600" 
        > 
          تجهیزات پزشکی تنفسی > 
        </h3> 
      </div> 
 
      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]"> 
        <li class="cursor-pointer hover:text-red-600">دستگاه بخور و رطوبت ساز</li> 
        <li class="cursor-pointer hover:text-red-600">دستگاه بخور سرد</li> 
        <li class="cursor-pointer hover:text-red-600">دستگاه بخور گرم</li> 
        <li class="cursor-pointer hover:text-red-600">پالس اکسیمتر</li> 
        <li class="cursor-pointer hover:text-red-600">تجهیزات کمکی تنفسی</li> 
      </ul> 
 
 
      <!-- مکمل غذایی --> 
      <div class="flex items-center gap-2 mb-5 pt-5"> 
        <span class="w-[1.5px] h-4 bg-red-600"></span> 
        <h3 
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600" 
        > 
          مکمل غذایی > 
        </h3> 
      </div> 
 
      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]"> 
        <li class="cursor-pointer hover:text-red-600">مکمل کمک درمانی</li> 
        <li class="cursor-pointer hover:text-red-600">مکمل کودک و نوزاد</li> 
        <li class="cursor-pointer hover:text-red-600">اعصاب و روان</li> 
        <li class="cursor-pointer hover:text-red-600">بینایی</li> 
        <li class="cursor-pointer hover:text-red-600">بهداشت و سلامت جنسی</li> 
        <li class="cursor-pointer hover:text-red-600">پوست مو و ناخن</li> 
        <li class="cursor-pointer hover:text-red-600">ترک اعتیاد</li> 
        <li class="cursor-pointer hover:text-red-600">تسکین درد</li> 
        <li class="cursor-pointer hover:text-red-600">سیستم ایمنی</li> 
        <li class="cursor-pointer hover:text-red-600">سرماخوردگی و آنفلوانزا</li> 
        <li class="cursor-pointer hover:text-red-600">سیستم تنفسی و آلرژی</li> 
        <li class="cursor-pointer hover:text-red-600">سیستم گوارشی</li> 
        <li class="cursor-pointer hover:text-red-600">قلب و عروق</li> 
        <li class="cursor-pointer hover:text-red-600">کلیه و مجاری ادرار</li> 
        <li class="cursor-pointer hover:text-red-600">کنترل قند خون</li> 
        <li class="cursor-pointer hover:text-red-600">مفاصل و استخوان</li> 
      </ul> 
 
    </div> 
 
 
    <!-- ستون دوم --> 
    <div> 
 
      <!-- مکمل ورزشی --> 
      <div class="flex items-center gap-2 mb-5"> 
        <span class="w-[1.5px] h-4 bg-red-600"></span> 
        <h3 
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600" 
        > 
          مکمل ورزشی > 
        </h3> 
      </div> 
 
      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]"> 
        <li class="cursor-pointer hover:text-red-600">پروتئین</li> 
        <li class="cursor-pointer hover:text-red-600">آمینو اسید</li> 
        <li class="cursor-pointer hover:text-red-600">کراتین</li> 
        <li class="cursor-pointer hover:text-red-600">مکمل افزایش وزن</li> 
        <li class="cursor-pointer hover:text-red-600">مکمل کاهش وزن</li> 
      </ul> 
 
 
      <!-- ویتامین --> 
      <div class="flex items-center gap-2 mb-5 pt-5"> 
        <span class="w-[1.5px] h-4 bg-red-600"></span> 
        <h3 
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600" 
        > 
          ویتامین > 
        </h3> 
      </div> 
 
      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]"> 
        <li class="cursor-pointer hover:text-red-600">ویتامین C</li> 
        <li class="cursor-pointer hover:text-red-600">ویتامین D</li> 
        <li class="cursor-pointer hover:text-red-600">ویتامین B</li> 
        <li class="cursor-pointer hover:text-red-600">ویتامین D3</li> 
        <li class="cursor-pointer hover:text-red-600">ویتامین E</li> 
        <li class="cursor-pointer hover:text-red-600">ویتامین K</li> 
        <li class="cursor-pointer hover:text-red-600">امگا ۳</li> 
      </ul> 
 
 
      <!-- مواد معدنی --> 
      <div class="flex items-center gap-2 mb-5 pt-5"> 
        <span class="w-[1.5px] h-4 bg-red-600"></span> 
        <h3 
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600" 
        > 
          مواد معدنی > 
        </h3> 
      </div> 
 
      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]"> 
        <li class="cursor-pointer hover:text-red-600">قرص آهن</li> 
        <li class="cursor-pointer hover:text-red-600">قرص کلسیم</li> 
        <li class="cursor-pointer hover:text-red-600">قرص منیزیم</li> 
        <li class="cursor-pointer hover:text-red-600">قرص کروم</li> 
        <li class="cursor-pointer hover:text-red-600">قرص ید</li> 
        <li class="cursor-pointer hover:text-red-600">قرص زینک</li> 
        <li class="cursor-pointer hover:text-red-600">قرص سدیم</li> 
        <li class="cursor-pointer hover:text-red-600">قرص روی</li> 
      </ul> 
 
 
      <!-- ارتوپدی و کمک درمانی --> 
      <div class="flex items-center gap-2 mb-5 pt-5"> 
        <span class="w-[1.5px] h-4 bg-red-600"></span> 
        <h3 
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600" 
        > 
          ارتوپدی و کمک درمانی > 
        </h3> 
      </div> 
 
      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]"> 
        <li class="cursor-pointer hover:text-red-600">توانبخشی</li> 
        <li class="cursor-pointer hover:text-red-600">ساپورت‌های طبی</li> 
      </ul> 
 
    </div> 
 
 
    <!-- ستون سوم --> 
    <div> 
 
      <!-- کنترل دیابت --> 
      <div class="flex items-center gap-2 mb-5"> 
        <span class="w-[1.5px] h-4 bg-red-600"></span> 
        <h3 
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600" 
        > 
          کنترل دیابت > 
        </h3> 
      </div> 
 
      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]"> 
        <li class="cursor-pointer hover:text-red-600">دستگاه تست قند خون</li> 
        <li class="cursor-pointer hover:text-red-600">نوار تست قند خون</li> 
        <li class="cursor-pointer hover:text-red-600">سوزن تست قند خون</li> 
        <li class="cursor-pointer hover:text-red-600">سرنگ انسولین</li> 
        <li>کیف خنک نگه دارنده انسولین</li> 
      </ul> 
 
 
      <!-- لوازم پزشکی مصرفی --> 
      <div class="flex items-center gap-2 mb-5 pt-5"> 
        <span class="w-[1.5px] h-4 bg-red-600"></span> 
        <h3 
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600" 
        > 
          لوازم پزشکی مصرفی > 
        </h3> 
      </div> 
 
      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]"> 
        <li>سوند و کتترهای ادراری</li> 
        <li>تزریقات</li> 
        <li>پانسمان</li> 
        <li>چسب پانسمان</li> 
        <li>محصولات سلولزی طبی</li> 
        <li>کیت تشخیص</li> 
        <li>البسه بیمارستانی</li> 
        <li>دستکش‌های طبی</li> 
        <li>ضد عفونی کننده زخم</li> 
        <li>لوازم پزشکی مصرفی عمومی</li> 
      </ul> 
 
 
      <!-- آزمایشگاهی --> 
      <div class="flex items-center gap-2 mb-5 pt-5"> 
        <span class="w-[1.5px] h-4 bg-red-600"></span> 
        <h3 
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600" 
        > 
          آزمایشگاهی > 
        </h3> 
      </div> 
 
 
      <!-- تجهیزات دندانپزشکی --> 
      <div class="flex items-center gap-2 mb-5 pt-5"> 
        <span class="w-[1.5px] h-4 bg-red-600"></span> 
        <h3 
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600" 
        > 
          تجهیزات دندانپزشکی > 
        </h3> 
      </div> 
 
      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]"> 
        <li>تجهیزات تخصصی دندانپزشکی</li> 
        <li>تجهیزات عمومی دندانپزشکی</li> 
      </ul> 
 
 
      <!-- مراقبت دهان و دندان --> 
      <div class="flex items-center gap-2 mb-5 pt-5"> 
        <span class="w-[1.5px] h-4 bg-red-600"></span> 
        <h3 
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600" 
        > 
          مراقبت دهان و دندان > 
        </h3> 
      </div> 
 
 
      <!-- ماساژور --> 
      <div class="flex items-center gap-2 mb-5 pt-5"> 
        <span class="w-[1.5px] h-4 bg-red-600"></span> 
        <h3 
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600" 
        > 
          ماساژور > 
        </h3> 
      </div> 
 
      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]"> 
        <li>ماساژور دستی</li> 
        <li>صندلی ماساژور</li> 
        <li>ماساژور برقی</li> 
      </ul> 
 
    </div> 
 
  </div> 
</div>
<!-- زیرمنوی ابزارآلات و تجهیزات -->
<div 
  data-submenu="tools" 
  class="hidden w-full h-full px-8 py-6 max-h-[600px] overflow-y-auto" 
  style="direction: ltr;" 
> 
 
  <!-- عنوان --> 
  <div class="mb-8" style="direction: rtl;"> 
    <h2 
      class="font-[Vazirmatn] font-semibold text-blue-900 cursor-pointer" 
    > 
      همه محصولات ابزارآلات و تجهیزات > 
    </h2> 
  </div> 
 
  <!-- چهار ستون --> 
  <div 
    class="grid grid-cols-4 gap-10" 
    style="direction: rtl;" 
  > 
 
    <!-- ستون اول --> 
    <div> 
 
      <!-- ابزار برقی --> 
      <div class="flex items-center gap-2 mb-5"> 
        <span class="w-[1.5px] h-4 bg-red-600"></span> 
        <h3 
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600" 
        > 
          ابزار برقی > 
        </h3> 
      </div> 
 
      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]"> 
        <li>دریل</li> 
        <li>پیچ گوشتی و دریل شارژی</li> 
        <li>آچار ضربه ای</li> 
        <li>فرز و سنگ رومیزی</li> 
        <li>موتور برق</li> 
        <li>مکنده - دمنده</li> 
        <li>جاروبرقی صنعتی</li> 
        <li>کارواش</li> 
        <li>دستگاه جوش</li> 
        <li>هویه</li> 
        <li>ابزار برش و تراشکاری</li> 
        <li>کمپرسور هوا</li> 
        <li>مولتی متر</li> 
        <li>لوازم جانبی و یدکی ابزار برقی</li> 
        <li>اره زنجیری</li> 
      </ul> 
 
      
    </div> 
 
 
    <!-- ستون دوم --> 
    <div> 
 
      <!-- لوازم الکتریکی و یراق آلات --> 
      <div class="flex items-center gap-2 mb-5"> 
        <span class="w-[1.5px] h-4 bg-red-600"></span> 
        <h3 
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600" 
        > 
          لوازم الکتریکی و یراق آلات > 
        </h3> 
      </div> 
 
      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]"> 
        <li>رنگ</li> 
        <li>لوازم الکتریکی</li> 
        <li>مصالح ساختمانی</li> 
        <li>زنگ و در بازکن</li> 
      </ul> 
 
 
      <!-- لوازم باغبانی و کشاورزی --> 
      <div class="flex items-center gap-2 mb-5 pt-5"> 
        <span class="w-[1.5px] h-4 bg-red-600"></span> 
        <h3 
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600" 
        > 
          لوازم باغبانی و کشاورزی > 
        </h3> 
      </div> 
 
      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]"> 
        <li>ابزار باغبانی</li> 
        <li>ادوات کشاورزی</li> 
        <li>بذر و تخم گیاهان</li> 
        <li>خاک، کود و آفت کش</li> 
        <li>کاشت و پرورش گیاه</li> 
      </ul> 
 
 
      <!-- تجهیزات ایمنی و کار --> 
      <div class="flex items-center gap-2 mb-5 pt-5"> 
        <span class="w-[1.5px] h-4 bg-red-600"></span> 
        <h3 
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600" 
        > 
          تجهیزات ایمنی و کار > 
        </h3> 
      </div> 
 
      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]"> 
        <li>ماسک تنفسی</li> 
        <li>لوازم آتش‌نشانی</li> 
        <li>لوازم ایمنی و کار</li> 
        <li>جعبه کمک‌های اولیه</li> 
        <li>برچسب و علائم ایمنی</li> 
      </ul> 
 
    </div> 
 
 
    <!-- ستون سوم --> 
    <div> 
 
      <!-- حفاظتی و امنیتی --> 
      <div class="flex items-center gap-2 mb-5"> 
        <span class="w-[1.5px] h-4 bg-red-600"></span> 
        <h3 
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600" 
        > 
          حفاظتی و امنیتی > 
        </h3> 
      </div> 
 
      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]"> 
        <li>گاوصندوق</li> 
        <li>قفل</li> 
      </ul> 
 
 
      <!-- دستگاه های حمل و بالابر صنعتی --> 
      <div class="flex items-center gap-2 mb-5 pt-5"> 
        <span class="w-[1.5px] h-4 bg-red-600"></span> 
        <h3 
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600" 
        > 
          دستگاه های حمل صنعتی > 
        </h3> 
      </div> 
 
      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]"> 
        <li>قطعات یدکی ماشین آلات صنعتی</li> 
        <li>تجهیزات کارگاهی</li> 
      </ul> 
 
 
      <!-- مخزن آب --> 
      <div class="flex items-center gap-2 mb-5 pt-5"> 
        <span class="w-[1.5px] h-4 bg-red-600"></span> 
        <h3 
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600" 
        > 
          مخزن آب > 
        </h3> 
      </div> 
 
    </div> 
 
 
    <!-- ستون چهارم --> 
    <div> 
 
      <!-- شیرآلات --> 
      <div class="flex items-center gap-2 mb-5"> 
        <span class="w-[1.5px] h-4 bg-red-600"></span> 
        <h3 
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600" 
        > 
          شیرآلات > 
        </h3> 
      </div> 
 
      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]"> 
        <li>ست شیرآلات</li> 
        <li>شیر ظرفشویی</li> 
        <li>شیر روشویی</li> 
        <li>شیرآلات حمام</li> 
        <li>شیر توالت</li> 
        <li>اتصالات جانبی</li> 
      </ul> 
      <div class="flex items-center gap-2 mb-5 pt-5"> 
        <span class="w-[1.5px] h-4 bg-red-600"></span> 
        <h3 
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600" 
        > 
          ابزار غیر برقی > 
        </h3> 
      </div> 
 
      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]"> 
        <li>ابزار دستی</li> 
        <li>مجموعه ابزار</li> 
        <li>نردبان</li> 
        <li>پیچ گوشتی و فازمتر</li> 
        <li>نظم دهنده ابزار</li> 
        <li>متر، تراز، اندازه‌گیری دقیق</li> 
        <li>لوازم روانکاری</li> 
        <li>چسب صنعتی</li> 
        <li>پیچ و مهره، رول پلاک، میخ و پرچ</li> 
        <li>مته و سری</li> 
        <li>اره</li> 
        <li>لوازم بسته بندی</li> 
        <li>انواع آچار و انبر</li> 
        <li>آچار فرانسه</li> 
        <li>آچار شلاقی (آچار لوله‌گیر)</li> 
        <li>آچار آلن</li> 
      </ul> 
 
 
    </div> 
 
  </div> 
</div>
<!-- زیرمنوی کتاب و هنر -->
<div 
  data-submenu="books" 
  class="hidden w-full h-full px-8 py-6 max-h-[600px] overflow-y-auto" 
  style="direction: ltr;" 
> 
 
  <!-- عنوان --> 
  <div class="mb-8" style="direction: rtl;"> 
    <h2 
      class="font-[Vazirmatn] font-semibold text-blue-900 cursor-pointer" 
    > 
      همه محصولات کتاب و هنر > 
    </h2> 
  </div> 
 
  <!-- چهار ستون --> 
  <div 
    class="grid grid-cols-4 gap-10" 
    style="direction: rtl;" 
  > 
 
    <!-- ستون اول --> 
    <div> 
 
      <!-- کتاب و مجله --> 
      <div class="flex items-center gap-2 mb-5"> 
        <span class="w-[1.5px] h-4 bg-red-600"></span> 
        <h3 
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600" 
        > 
          کتاب و مجله > 
        </h3> 
      </div> 
 
      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]"> 
        <li>کتاب چاپی</li> 
        <li>مجلات خارجی و داخلی</li> 
      </ul> 
 
 
      <!-- محبوب‌ترین آثار --> 
      <div class="flex items-center gap-2 mb-5 pt-5"> 
        <span class="w-[1.5px] h-4 bg-red-600"></span> 
        <h3 
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600" 
        > 
          محبوب‌ترین آثار > 
        </h3> 
      </div> 
 
      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]"> 
        <li>کتاب های سعدی</li> 
        <li>کتاب های حافظ</li> 
        <li>کتاب های خیام</li> 
        <li>کتاب های فردوسی</li> 
        <li>کتاب های مولانا</li> 
        <li>کتاب های شهریار</li> 
        <li>کتاب های فروغ فرخزاد</li> 
        <li>کتاب های هوشنگ ابتهاج</li> 
        <li>کتاب های سهراب سپهری</li> 
        <li>کتاب های سیمین دانشور</li> 
        <li>کتاب های جورج اورول</li> 
        <li>کتاب های هری پاتر</li> 
        <li>کتاب های آشپزی</li> 
      </ul> 
 
 
      <!-- کتاب صوتی --> 
      <div class="flex items-center gap-2 mb-5 pt-5"> 
        <span class="w-[1.5px] h-4 bg-red-600"></span> 
        <h3 
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600" 
        > 
          کتاب صوتی > 
        </h3> 
      </div> 
 
    </div> 
 
 
    <!-- ستون دوم --> 
    <div> 
 
      <!-- محتوای آموزشی --> 
      <div class="flex items-center gap-2 mb-5"> 
        <span class="w-[1.5px] h-4 bg-red-600"></span> 
        <h3 
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600" 
        > 
          محتوای آموزشی > 
        </h3> 
      </div> 
 
      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]"> 
        <li>آموزش موسیقی</li> 
        <li>آموزش ورزش و سرگرمی</li> 
        <li>آموزش زبان</li> 
        <li>آموزش نرم افزار و کامپیوتر</li> 
      </ul> 
 
 
      <!-- نرم افزار --> 
      <div class="flex items-center gap-2 mb-5 pt-5"> 
        <span class="w-[1.5px] h-4 bg-red-600"></span> 
        <h3 
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600" 
        > 
          نرم افزار > 
        </h3> 
      </div> 
 
 
      <!-- بازی کنسول و کامپیوتر --> 
      <div class="flex items-center gap-2 mb-5 pt-5"> 
        <span class="w-[1.5px] h-4 bg-red-600"></span> 
        <h3 
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600" 
        > 
          بازی کنسول و کامپیوتر > 
        </h3> 
      </div> 
 
 
      <!-- فیلم سینمایی، سریال و مستند --> 
      <div class="flex items-center gap-2 mb-5 pt-5"> 
        <span class="w-[1.5px] h-4 bg-red-600"></span> 
        <h3 
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600" 
        > 
          فیلم سینمایی، سریال و مستند > 
        </h3> 
      </div> 
 
 
      <!-- آلبوم موسیقی --> 
      <div class="flex items-center gap-2 mb-5 pt-5"> 
        <span class="w-[1.5px] h-4 bg-red-600"></span> 
        <h3 
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600" 
        > 
          آلبوم موسیقی > 
        </h3> 
      </div> 
 
    </div> 
 
 
    <!-- ستون سوم --> 
    <div> 
 
      <!-- لوازم تحریر --> 
      <div class="flex items-center gap-2 mb-5"> 
        <span class="w-[1.5px] h-4 bg-red-600"></span> 
        <h3 
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600" 
        > 
          لوازم تحریر > 
        </h3> 
      </div> 
 
      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]"> 
        <li>لوازم اداری و اقلام مصرفی</li> 
        <li>کیف، کوله پشتی و جامدادی</li> 
        <li>چراغ مطالعه</li> 
        <li>کاغذ کادو، پاکت و کارت هدیه</li> 
        <li>نوشت افزار</li> 
        <li>دفتر و کاغذ</li> 
        <li>خودکار و روان نویس</li> 
        <li>ابزار نقاشی و رنگ آمیزی</li> 
        <li>میز تحریر</li> 
        <li>آلبوم عکس</li> 
        <li>کاغذ چاپ و پرینتر</li> 
        <li>مداد و مداد رنگی</li> 
      </ul> 
 
    </div> 
 
 
    <!-- ستون چهارم --> 
    <div> 
 
      <!-- آلات موسیقی --> 
      <div class="flex items-center gap-2 mb-5"> 
        <span class="w-[1.5px] h-4 bg-red-600"></span> 
        <h3 
          class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600" 
        > 
          آلات موسیقی > 
        </h3> 
      </div> 
 
      <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]"> 
        <li>لوازم جانبی آلات موسیقی</li> 
        <li>گیتار</li> 
        <li>کیبورد و ارگ</li> 
        <li>پیانو دیجیتال</li> 
        <li>درام، پرکاشن، دف</li> 
        <li>تجهیزات استودیویی</li> 
        <li>ویولن</li> 
        <li>ساز های ایرانی</li> 
      </ul> 
 
    </div> 
 
  </div> 
</div>
<!-- زیرمنوی ورزش و سفر -->
<div 
  data-submenu="sport" 
  class="hidden w-full h-full px-8 py-6 max-h-[600px] overflow-y-auto" 
  style="direction: ltr;"
>

  <!-- عنوان -->
  <div class="mb-8" style="direction: rtl;">
    <h2 class="font-[Vazirmatn] font-semibold text-blue-900 cursor-pointer">
      همه محصولات ورزش و سفر >
    </h2>
  </div>

  <!-- محتوا -->
  <div class="grid grid-cols-4 gap-10" style="direction: rtl;">

    <!-- ستون اول -->
    <div>

      <!-- لوازم کوهنوردی و کمپینگ -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            لوازم کوهنوردی و کمپینگ >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>تجهیزات جانبی سفر و کمپینگ</li>
          <li>میز و صندلی سفری</li>
          <li>چراغ قوه</li>
          <li>اجاق و ظرف سفری</li>
          <li>چادر مسافرتی</li>
          <li>قهوه‌ساز و اسپرسوساز سفری</li>
          <li>تراول ماگ</li>
          <li>قمقمه و فلاسک و کلمن</li>
          <li>زیرانداز</li>
          <li>سایه بان</li>
          <li>کیسه خواب</li>
          <li>چاقوی سفر و ابزار چندکاره</li>
          <li>عصای کوهنوردی</li>
          <li>تجهیزات کوهنوردی</li>
        </ul>
      </div>

      <!-- ورزش های هوازی و بدنسازی -->
      <div class=" mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            ورزش های هوازی و بدنسازی >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>تجهیزات جانبی ایروبیک و تناسب اندام</li>
          <li>طناب</li>
          <li>دمبل</li>
          <li>بارفیکس</li>
          <li>قمقمه و شیکر ورزشی</li>
          <li>زیرانداز ورزشی</li>
        </ul>
      </div>

      <!-- ورزش های آبی -->
      <div>
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            ورزش های آبی >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>قایق و لوازم جانبی</li>
          <li>کلاه شنا</li>
          <li>عینک شنا</li>
          <li>لوازم جانبی شنا</li>
          <li>لباس غواصی</li>
        </ul>
      </div>

    </div>


    <!-- ستون دوم -->
    <div>

      <!-- ورزش های رزمی -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            ورزش های رزمی >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>کیسه بوکس</li>
          <li>دستکش رزمی</li>
          <li>لوازم پوششی و محافظتی ورزشی</li>
        </ul>
      </div>

      <!-- دوچرخه -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            دوچرخه >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>دوچرخه ۱۲</li>
          <li>دوچرخه ۱۶</li>
          <li>دوچرخه ۲۰</li>
          <li>دوچرخه ۲۴</li>
          <li>دوچرخه ۲۶</li>
          <li>دوچرخه ۲۷</li>
          <li>دوچرخه برقی</li>
        </ul>
      </div>

      <!-- لوازم ورزشی -->
      <div >
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            لوازم ورزشی >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>توپ</li>
          <li>راکت تنیس، بدمینتون و اسکواش</li>
          <li>لوازم ماهیگیری</li>
          <li>پینگ پنگ</li>
          <li>شطرنج</li>
          <li>عینک ورزشی</li>
          <li>فوتبال دستی</li>
          <li>دارت</li>
          <li>میز پینگ پنگ</li>
          <li>تجهیزات اسکی</li>
          <li>لوازم سوارکاری</li>
          <li>ساک ورزشی</li>
          <li>اسکوتر</li>
          <li>اسکوتر برقی</li>
          <li>لوازم جانبی اسکوتر برقی</li>
        </ul>
      </div>

    </div>


    <!-- ستون سوم -->
    <div>

      <!-- دستگاه‌های هوازی -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            دستگاه‌های هوازی >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>تردمیل</li>
          <li>دوچرخه ثابت و الپتیکال</li>
          <li>استپر</li>
          <li>لوازم تردمیل</li>
        </ul>
      </div>

      <!-- تجهیزات سفر -->
      <div class=" mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            تجهیزات سفر >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>ساک و چمدان</li>
          <li>کیف و کوله پشتی</li>
        </ul>
      </div>

      <!-- پوشاک ورزشی مردانه -->
      <div>
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            پوشاک ورزشی مردانه >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>کفش ورزشی مردانه</li>
          <li>کفش فوتبال</li>
          <li>کفش فوتسال</li>
          <li>لباس ورزشی مردانه</li>
          <li>تی شرت ورزشی مردانه</li>
          <li>گرمکن و ست ورزشی مردانه</li>
          <li>شلوارک ورزشی مردانه</li>
          <li>شلوار ورزشی مردانه</li>
          <li>ست تی‌شرت و شلوارک ورزشی مردانه</li>
          <li>جوراب ورزشی مردانه</li>
          <li>پولوشرت ورزشی مردانه</li>
          <li>سویشرت و هودی ورزشی مردانه</li>
          <li>کاپشن و جلیقه ورزشی مردانه</li>
        </ul>
      </div>

    </div>


    <!-- ستون چهارم -->
    <div>

      <!-- پوشاک ورزشی زنانه -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            پوشاک ورزشی زنانه >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>کفش ورزشی زنانه</li>
          <li>کفش ورزشی دخترانه</li>
          <li>کفش ورزشی پسرانه</li>
          <li>لباس ورزشی زنانه</li>
          <li>تاپ ورزشی زنانه</li>
          <li>گرمکن و ست ورزشی زنانه</li>
          <li>لگ ورزشی زنانه</li>
          <li>تی شرت ورزشی زنانه</li>
          <li>شلوارک ورزشی زنانه</li>
          <li>شلوار و سرهمی ورزشی زنانه</li>
          <li>جوراب ورزشی زنانه</li>
          <li>سویشرت و هودی ورزشی زنانه</li>
          <li>کاپشن و جلیقه ورزشی زنانه</li>
          <li>پولوشرت ورزشی زنانه</li>
        </ul>
      </div>

      <!-- سایر -->
      <div>
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            سایر محصولات ورزشی >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>گرمکن و ست ورزشی دخترانه</li>
          <li>اسکیت</li>
        </ul>
      </div>

    </div>

  </div>
</div>
<!-- زیرمنوی کارت هدیه و گیفت کارت -->
<div 
  data-submenu="gift" 
  class="hidden w-full h-full px-8 py-6 max-h-[600px] overflow-y-auto" 
  style="direction: ltr;"
>

  <!-- عنوان -->
  <div class="mb-8" style="direction: rtl;">
    <h2 class="font-[Vazirmatn] font-semibold text-blue-900 cursor-pointer">
      همه محصولات کارت هدیه و گیفت کارت >
    </h2>
  </div>

  <!-- محتوا -->
  <div class="grid grid-cols-3 gap-10" style="direction: rtl;">

    <!-- ستون اول -->
    <div>

      <!-- کارت هدیه فیزیکی دیجی کالا -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            کارت هدیه فیزیکی دیجی کالا >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>کارت هدیه براساس مناسبت</li>
          <li>کارت هدیه تولد</li>
          <li>کارت هدیه روز مادر</li>
          <li>کارت هدیه روز معلم</li>
          <li>کارت هدیه سالگرد</li>
          <li>کارت هدیه تشکر</li>
          <li>کارت هدیه دوستی</li>
          <li>کارت هدیه ازدواج</li>
          <li>کارت هدیه نوزاد</li>
          <li>کارت هدیه خانه نو</li>
          <li>کارت هدیه فارغ التحصیلی</li>
          <li>کارت هدیه عید نوروز</li>
          <li>کارت هدیه شب یلدا</li>
        </ul>
      </div>

      <!-- کارت هدیه براساس قیمت -->
      <div>
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            کارت هدیه براساس قیمت >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>کارت هدیه تا 500 هزار تومان</li>
          <li>کارت هدیه از 500 هزار تا 2 میلیون تومان</li>
          <li>کارت هدیه از 2 میلیون تا 5 میلیون تومان</li>
          <li>کارت هدیه 5 میلیون تومانی</li>
          <li>کارت هدیه از 5 میلیون تا 10 میلیون تومان</li>
          <li>کارت هدیه از 10 میلیون تا 20 میلیون تومان</li>
          <li>کارت هدیه بیش از 20 میلیون تومان</li>
        </ul>
      </div>

    </div>


    <!-- ستون دوم -->
    <div>

      <!-- کارت هدیه الکترونیکی دیجی کالا -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            کارت هدیه الکترونیکی دیجی کالا >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>کارت هدیه الکترونیکی براساس مناسبت</li>
          <li>کارت هدیه الکترونیکی تولد</li>
          <li>کارت هدیه الکترونیکی روز معلم</li>
          <li>کارت هدیه الکترونیکی سالگرد</li>
          <li>کارت هدیه الکترونیکی تشکر</li>
          <li>کارت هدیه الکترونیکی عذرخواهی</li>
          <li>کارت هدیه الکترونیکی دوستی</li>
          <li>کارت هدیه الکترونیکی ازدواج</li>
          <li>کارت هدیه الکترونیکی نوزاد</li>
          <li>کارت هدیه الکترونیکی خانه نو</li>
          <li>کارت هدیه الکترونیکی فارغ التحصیلی</li>
          <li>کارت هدیه الکترونیکی عید نوروز</li>
        </ul>
      </div>

    </div>


    <!-- ستون سوم -->
    <div>

      <!-- کارت هدیه سازمانی -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            کارت هدیه سازمانی >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>کارت هدیه سازمانی</li>
        </ul>
      </div>

      <!-- کارت هدیه مد و پوشاک -->
      <div>
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            کارت هدیه مد و پوشاک >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>کارت هدیه مد و پوشاک</li>
        </ul>
      </div>

    </div>

  </div>
</div>
<!-- زیرمنوی سوپرمارکت آنلاین -->
<div 
  data-submenu="supermarket" 
  class="hidden w-full h-full px-8 py-6 max-h-[600px] overflow-y-auto" 
  style="direction: ltr;"
>

  <!-- عنوان -->
  <div class="mb-8" style="direction: rtl;">
    <h2 class="font-[Vazirmatn] font-semibold text-blue-900 cursor-pointer">
      همه محصولات سوپر مارکت آنلاین >
    </h2>
  </div>

  <!-- محتوا -->
  <div class="grid grid-cols-4 gap-10" style="direction: rtl;">

    <!-- ستون اول -->
    <div>

      <!-- کالاهای اساسی و خواربار -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            کالاهای اساسی و خواربار >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>ماکارونی</li>
          <li>برنج</li>
          <li>نبات</li>
          <li>قند</li>
          <li>شکر</li>
          <li>رب گوجه</li>
          <li>رب انار</li>
        </ul>
      </div>

      <!-- روغن -->
      <div class=" mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            روغن >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>روغن مایع</li>
          <li>روغن جامد و نیمه جامد</li>
          <li>روغن زیتون</li>
          <li>روغن ذرت</li>
          <li>روغن کنجد</li>
          <li>روغن حیوانی</li>
        </ul>
      </div>

      <!-- چای و دمنوش -->
      <div class=" mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            چای و دمنوش >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>چای سیاه</li>
          <li>چای سبز</li>
          <li>دمنوش</li>
          <li>چای ماسالا</li>
        </ul>
      </div>

      <!-- قهوه -->
      <div>
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            قهوه >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>دانه قهوه</li>
          <li>قهوه فوری</li>
          <li>قهوه اسپرسو</li>
        </ul>
      </div>

    </div>


    <!-- ستون دوم -->
    <div>

      <!-- غذاهای آماده و نیمه آماده -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            غذاهای آماده و نیمه آماده >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>تن ماهی</li>
          <li>نودل</li>
          <li>غذاهای آماده کنسروی</li>
        </ul>
      </div>

      <!-- حبوبات و سویا -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            حبوبات و سویا >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>عدس</li>
          <li>ماش</li>
          <li>کینوا</li>
          <li>لپه</li>
          <li>نخود</li>
          <li>لوبیا</li>
          <li>سویا</li>
        </ul>
      </div>

      <!-- ادویه و افزودنی -->
      <div class=" mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            ادویه و افزودنی >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>زعفران</li>
          <li>زرشک</li>
          <li>فلفل</li>
          <li>نمک</li>
          <li>هل</li>
          <li>زنجبیل</li>
          <li>زردچوبه</li>
        </ul>
      </div>

      <!-- صبحانه -->
      <div class="pt-5">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            صبحانه >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>کره بادام زمینی</li>
          <li>شکلات صبحانه</li>
          <li>غلات صبحانه</li>
          <li>عسل</li>
        </ul>
      </div>

    </div>


    <!-- ستون سوم -->
    <div>

      <!-- نوشیدنی -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            نوشیدنی >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>شیر کاکائو</li>
          <li>آب معدنی</li>
          <li>نوشابه</li>
          <li>ماء الشعیر</li>
          <li>انرژی زا</li>
          <li>شربت و آبمیوه</li>
          <li>عرقیات و گلاب</li>
        </ul>
      </div>

      <!-- ترشی و شور -->
      <div class=" mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            ترشی و شور >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>زیتون</li>
          <li>ترشی</li>
          <li>شور</li>
          <li>خیارشور</li>
        </ul>
      </div>

      <!-- تنقلات -->
      <div class=" mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            تنقلات >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>چیپس</li>
          <li>پفک</li>
          <li>تخمه</li>
          <li>لواشک</li>
          <li>کیک و کلوچه</li>
          <li>شکلات</li>
          <li>پاستیل</li>
          <li>آدامس</li>
          <li>بیسکویت</li>
        </ul>
      </div>

      <!-- آجیل -->
      <div>
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            آجیل >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>فندق</li>
          <li>پسته</li>
          <li>بادام درختی</li>
          <li>بادام هندی</li>
          <li>بادام زمینی</li>
          <li>انجیر</li>
          <li>آجیل شب یلدا</li>
        </ul>
      </div>

    </div>


    <!-- ستون چهارم -->
    <div>

      <!-- شیرینی -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            شیرینی >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>گز، سوهان و پولکی</li>
          <li>پشمک، مسقطی و باسلوق</li>
          <li>خشکبار</li>
        </ul>
      </div>

      <!-- مواد پروتئینی و تخم مرغ -->
      <div class=" mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            مواد پروتئینی و تخم مرغ >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>خاویار</li>
          <li>سوسیس</li>
        </ul>
      </div>

      <!-- میوه و سبزیجات -->
      <div class=" mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            میوه و سبزیجات >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>سبزیجات</li>
          <li>خرما</li>
        </ul>
      </div>

      <!-- بهداشت و نظافت خانگی -->
      <div class=" mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            بهداشت و نظافت خانگی >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>اسکاچ و سیم ظرفشویی</li>
          <li>دستکش نظافت</li>
          <li>مواد شوینده</li>
          <li>شوینده لباس</li>
          <li>شوینده ظروف</li>
          <li>شوینده سطوح</li>
          <li>مایع دستشویی</li>
          <li>شوینده فرش و مبل</li>
          <li>لوازم یکبار مصرف آشپزخانه</li>
          <li>دستمال کاغذی</li>
        </ul>
      </div>

    </div>

  </div>
</div>
<!-- زیرمنوی اسباب بازی، کودک و نوزاد -->
<div 
  data-submenu="baby" 
  class="hidden w-full h-full px-8 py-6 max-h-[600px] overflow-y-auto" 
  style="direction: ltr;"
>

  <!-- عنوان -->
  <div class="mb-8" style="direction: rtl;">
    <h2 class="font-[Vazirmatn] font-semibold text-blue-900 cursor-pointer">
      همه محصولات اسباب بازی، کودک و نوزاد >
    </h2>
  </div>

  <!-- محتوا -->
  <div class="grid grid-cols-5 gap-8" style="direction: rtl;">

    <!-- ستون اول -->
    <div>

      <!-- بهداشت و حمام کودک و نوزاد -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            بهداشت و حمام >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>پوشک</li>
          <li>دستمال مرطوب</li>
          <li>حوله</li>
          <li>وان حمام نوزاد</li>
          <li>مینی واش</li>
          <li>شامپو کودک و نوزاد</li>
        </ul>
      </div>

      <!-- پوشاک و کفش کودک و نوزاد -->
      <div>
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            پوشاک و کفش >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>لباس نوزادی</li>
          <li>کفش</li>
          <li>جوراب و پاپوش کودک و نوزاد</li>
          <li>کلاه و پیش بند نوزاد</li>
        </ul>
      </div>

    </div>


    <!-- ستون دوم -->
    <div>

      <!-- پوشاک بچگانه -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            پوشاک بچگانه >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>پوشاک پسرانه</li>
          <li>لباس پسرانه</li>
          <li>لباس و کفش ورزشی پسرانه</li>
          <li>کفش پسرانه</li>
          <li>کوله پشتی پسرانه</li>
          <li>لباس دخترانه</li>
          <li>کفش دخترانه</li>
          <li>کوله پشتی دخترانه</li>
        </ul>
      </div>

      <!-- تبلت -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            تبلت >
          </h3>
        </div>
      </div>

      
      

    </div>


    <!-- ستون سوم -->
    <div>

      <!-- اسباب بازی -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            اسباب بازی >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>فکری و آموزشی</li>
          <li>پازل، لگو و ساختنی</li>
          <li>عروسک و فیگور</li>
          <li>اسپینر، ابزار شوخی و سرگرمی</li>
          <li>تفنگ، تیر و لوازم جنگی</li>
        </ul>
      </div>

      <!-- بازی و سرگرمی کودک -->
      <div >
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            بازی و سرگرمی کودک >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>ماشین بازی، موتور و سه چرخه</li>
          <li>دوچرخه</li>
          <li>تشک بازی و پارک بازی</li>
          <li>تاب و سرسره</li>
        </ul>
      </div>

    </div>


    <!-- ستون چهارم -->
    <div>

      <!-- سلامت، ایمنی و مراقبت -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            سلامت >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>تصفیه هوا</li>
          <li>ترازو</li>
          <li>دوربین و پیجر اتاق کودک</li>
          <li>تب سنج و دماسنج</li>
          <li>محافظ و ابزار ایمنی</li>
        </ul>
      </div>

      <!-- خواب کودک -->
      <div>
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            خواب کودک >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>مبلمان اتاق کودک</li>
          <li>چراغ خواب کودک</li>
          <li>تشک کودک</li>
          <li>سرویس خواب</li>
          <li>پتو</li>
          <li>بالش شیردهی</li>
        </ul>
      </div>

    </div>


    <!-- ستون پنجم -->
    <div>

      <!-- داغ ترین ها -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            داغ ترین ها >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>عروسک لبوبو</li>
          <li>عروسک سالیوان</li>
          <li>عروسک پاندا</li>
          <li>عروسک کرومی</li>
          <li>بازی منچ</li>
          <li>کیمدی شاپ</li>
          <li>کیمدی امضا شده</li>
          <li>خمیر بازی</li>
          <li>ایرهاکی</li>
        </ul>
      </div>

      <!-- ملزومات گردش و سفر -->
      <div >
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            ملزومات گردش و سفر >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>کالسکه و کریر</li>
        </ul>
      </div>

    </div>

  </div>
</div>
<!-- زیرمنوی محصولات بومی و محلی -->
<div 
  data-submenu="local" 
  class="hidden w-full h-full px-8 py-6 max-h-[600px] overflow-y-auto" 
  style="direction: ltr;"
>

  <!-- عنوان -->
  <div class="mb-8" style="direction: rtl;">
    <h2 class="font-[Vazirmatn] font-semibold text-blue-900 cursor-pointer">
      همه محصولات محصولات بومی و محلی >
    </h2>
  </div>

  <!-- ستون‌ها -->
  <div class="grid grid-cols-4 gap-10" style="direction: rtl;">

    <!-- ستون اول -->
    <div>

      <!-- مواد غذایی ارگانیک -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            مواد غذایی ارگانیک >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>خواروبار محلی</li>
          <li>برنج محلی</li>
          <li>روغن محلی</li>
          <li>صبحانه محلی</li>
          <li>عسل طبیعی</li>
          <li>حلوا شکری، ارده و کنجد سنتی</li>
        </ul>
      </div>

      <!-- کیک و شیرینی خانگی -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            کیک و شیرینی خانگی >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>شیرینی خانگی</li>
          <li>کیک و کلوچه محلی</li>
        </ul>
      </div>

      <!-- تنقلات خانگی -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            تنقلات خانگی >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>لواشک، برگه و آلوچه خانگی</li>
          <li>تخمه و مغز طعم‌دار محلی</li>
        </ul>
      </div>

      <!-- لبنیات سنتی -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            لبنیات سنتی >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>کره گیاهی و حیوانی محلی</li>
        </ul>
      </div>

      <!-- خشکبار و آجیل سنتی -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            خشکبار و آجیل سنتی >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>آجیل سنتی</li>
          <li>خرمای محلی</li>
        </ul>
      </div>

    </div>


    <!-- ستون دوم -->
    <div>

      <!-- غلات و حبوبات ارگانیک -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            غلات و حبوبات ارگانیک >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>غلات ارگانیک</li>
          <li>حبوبات و سویا ارگانیک</li>
        </ul>
      </div>

      <!-- ادویه و چاشنی ارگانیک -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            ادویه و چاشنی ارگانیک >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>ادویه‌های ارگانیک</li>
          <li>زعفران و زرشک ارگانیک</li>
        </ul>
      </div>

      <!-- عطاری -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            عطاری >
          </h3>
        </div>
      </div>

      <!-- ترشیجات و شور خانگی -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            ترشیجات و شور خانگی >
          </h3>
        </div>
      </div>

      <!-- پک هدیه شب یلدا -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            پک هدیه شب یلدا >
          </h3>
        </div>
      </div>

      <!-- دکوراتیو سنتی -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            دکوراتیو سنتی >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>لوستر و چراغ آویز دست ساز</li>
          <li>مجسمه دست ساز</li>
          <li>گلدان دست ساز</li>
          <li>تابلو سنتی</li>
          <li>ست هدیه سنتی</li>
          <li>ست هفت سین سنتی</li>
          <li>کاشی سنتی</li>
          <li>آینه سنتی</li>
          <li>محصولات بافتنی</li>
        </ul>
      </div>

    </div>


    <!-- ستون سوم -->
    <div>

      <!-- خانه و کاشانه -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            خانه و کاشانه >
          </h3>
        </div>
      </div>

      <!-- نوشیدنی‌های ارگانیک -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            نوشیدنی‌های ارگانیک >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>چای ارگانیک ایرانی</li>
          <li>دمنوش گیاهی</li>
        </ul>
      </div>

      <!-- اکسسوری و زیورآلات دست ساز -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            اکسسوری و زیورآلات دست ساز >
          </h3>
        </div>
      </div>

      <!-- پوشاک بومی و محلی -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            پوشاک بومی و محلی >
          </h3>
        </div>
      </div>

      <!-- قالی و قالیچه -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            قالی و قالیچه >
          </h3>
        </div>
      </div>

    </div>


    <!-- ستون چهارم -->
    <div>

      <!-- ظروف سنتی -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            ظروف سنتی >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>آجیل خوری سنتی</li>
          <li>دیس و سینی سنتی</li>
          <li>قندان سنتی</li>
          <li>بشقاب سنتی</li>
          <li>لیوان سنتی</li>
          <li>دیگ و قابلمه سنتی</li>
        </ul>
      </div>

      <!-- لوازم آشپزخانه سنتی -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            لوازم آشپزخانه سنتی >
          </h3>
        </div>

        <ul class="space-y-4 text-[13px] text-gray-500 font-[Vazirmatn]">
          <li>سبد دستبافت</li>
          <li>هاون سنتی</li>
          <li>تخته سرو دست ساز</li>
        </ul>
      </div>

      <!-- رومیزی، رانر و زیربشقابی سنتی -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-5">
          <span class="w-[1.5px] h-4 bg-red-600"></span>
          <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
            رومیزی، رانر و زیربشقابی سنتی >
          </h3>
        </div>
      </div>

    </div>

  </div>
</div>
<!-- زیرمنوی پت شاپ -->
<div 
  data-submenu="pet" 
  class="hidden w-full h-full px-8 py-6 max-h-[600px] overflow-y-auto" 
  style="direction: ltr;"
>

  <!-- عنوان -->
  <div class="mb-8" style="direction: rtl;">
    <h2 class="font-[Vazirmatn] font-semibold text-blue-900 cursor-pointer">
      همه محصولات پت شاپ >
    </h2>
  </div>

  <!-- یک ستون -->
  <div class="flex flex-col gap-7" style="direction: rtl;">

    <!-- بهداشت -->
    <div>
      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          بهداشت، مراقبت و نگهداری حیوانات >
        </h3>
      </div>
    </div>

    <!-- آموزش و سرگرمی -->
    <div>
      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          آموزش، سرگرمی و اکسسوری حیوانات >
        </h3>
      </div>
    </div>

    <!-- لانه و آشیانه -->
    <div>
      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          لانه و آشیانه نگهداری حیوانات >
        </h3>
      </div>
    </div>

    <!-- غذا و مکمل -->
    <div>
      <div class="flex items-center gap-2 mb-5">
        <span class="w-[1.5px] h-4 bg-red-600"></span>

        <h3 class="font-[Vazirmatn] text-[15px] font-semibold cursor-pointer hover:text-red-600">
          غذا و مکمل حیوانات >
        </h3>
      </div>
    </div>

  </div>
</div>
    </div>
    
    

    <!-- ========================= -->
    <!-- لیست دسته بندی سمت راست -->
    <!-- ========================= -->

    <div
      class="w-[250px] h-full 
             max-h-[600px]
             overflow-y-auto
             bg-white"
      style="direction: ltr;"
    >

      <!-- موبایل -->
      <div
        data-category="mobile"
        class="flex items-center gap-3 px-5 py-4
               cursor-pointer
               bg-gray-50
               hover:bg-gray-50
               hover:text-red-600
               transition-colors"
        style="direction: rtl;"
      >

        <i
          data-lucide="smartphone"
          class="w-5 h-5"
        ></i>

        <span class="text-sm font-[Vazirmatn]">
          موبایل
        </span>

      </div>


     <!-- لوازم تحریر -->
<div 
  data-category="stationery"
  class="flex items-center gap-3 px-5 py-4
         cursor-pointer
         hover:bg-gray-50
         hover:text-red-600
         transition-colors"
  style="direction: rtl;"
>
  
  <i 
    data-lucide="pen-tool"
    class="w-5 h-5"
  ></i>

  <span class="text-sm font-[Vazirmatn]">
    لوازم تحریر
  </span>

</div>

      <!-- لپ تاپ -->
      <div
        data-category="laptop"
        class="flex items-center gap-3 px-5 py-4
               cursor-pointer
               hover:bg-gray-50
               hover:text-red-600
               transition-colors"
        style="direction: rtl;"
      >

        <i
          data-lucide="laptop"
          class="w-5 h-5"
        ></i>

        <span class="text-sm font-[Vazirmatn]">
          لپ تاپ
        </span>

      </div>


      <!-- کالای دیجیتال -->
      <div
        data-category="digital"
        class="flex items-center gap-3 px-5 py-4
               cursor-pointer
               hover:bg-gray-50
               hover:text-red-600
               transition-colors"
        style="direction: rtl;"
      >

        <i
          data-lucide="monitor"
          class="w-5 h-5"
        ></i>

        <span class="text-sm font-[Vazirmatn]">
          کالای دیجیتال
        </span>

      </div>


      <!-- خانه و آشپزخانه -->
      <div
        data-category="home"
        class="flex items-center gap-3 px-5 py-4
               cursor-pointer
               hover:bg-gray-50
               hover:text-red-600
               transition-colors"
        style="direction: rtl;"
      >

        <i
          data-lucide="chef-hat"
          class="w-5 h-5"
        ></i>

        <span class="text-sm font-[Vazirmatn]">
          خانه و آشپزخانه
        </span>

      </div>


      <!-- لوازم خانگی برقی -->
      <div
        data-category="appliances"
        class="flex items-center gap-3 px-5 py-4
               cursor-pointer
               hover:bg-gray-50
               hover:text-red-600
               transition-colors"
        style="direction: rtl;"
      >

        <i
          data-lucide="plug"
          class="w-5 h-5"
        ></i>

        <span class="text-sm font-[Vazirmatn]">
          لوازم خانگی برقی
        </span>

      </div>


      <!-- آرایشی و بهداشتی -->
      <div
        data-category="beauty"
        class="flex items-center gap-3 px-5 py-4
               cursor-pointer
               hover:bg-gray-50
               hover:text-red-600
               transition-colors"
        style="direction: rtl;"
      >

        <i
          data-lucide="heart"
          class="w-5 h-5"
        ></i>

        <span class="text-sm font-[Vazirmatn]">
          آرایشی و بهداشتی
        </span>

      </div>


      <!-- مد و پوشاک -->
      <div
        data-category="fashion"
        class="flex items-center gap-3 px-5 py-4
               cursor-pointer
               hover:bg-gray-50
               hover:text-red-600
               transition-colors"
        style="direction: rtl;"
      >

        <i
          data-lucide="shirt"
          class="w-5 h-5"
        ></i>

        <span class="text-sm font-[Vazirmatn]">
          مد و پوشاک
        </span>

      </div>


      <!-- طلا و نقره -->
      <div
        data-category="gold"
        class="flex items-center gap-3 px-5 py-4
               cursor-pointer
               hover:bg-gray-50
               hover:text-red-600
               transition-colors"
        style="direction: rtl;"
      >

        <i
          data-lucide="gem"
          class="w-5 h-5"
        ></i>

        <span class="text-sm font-[Vazirmatn]">
          طلا و نقره
        </span>

      </div>


      <!-- خودرو و موتورسیکلت -->
      <div
        data-category="car"
        class="flex items-center gap-3 px-5 py-4
               cursor-pointer
               hover:bg-gray-50
               hover:text-red-600
               transition-colors"
        style="direction: rtl;"
      >

        <i
          data-lucide="car"
          class="w-5 h-5"
        ></i>

        <span class="text-sm font-[Vazirmatn]">
          خودرو و موتورسیکلت
        </span>

      </div>


      <!-- سلامت و پزشکی -->
      <div
        data-category="health"
        class="flex items-center gap-3 px-5 py-4
               cursor-pointer
               hover:bg-gray-50
               hover:text-red-600
               transition-colors"
        style="direction: rtl;"
      >

        <i
          data-lucide="heart-pulse"
          class="w-5 h-5"
        ></i>

        <span class="text-sm font-[Vazirmatn]">
          سلامت و پزشکی
        </span>

      </div>


      <!-- ابزارآلات و تجهیزات -->
      <div
        data-category="tools"
        class="flex items-center gap-3 px-5 py-4
               cursor-pointer
               hover:bg-gray-50
               hover:text-red-600
               transition-colors"
        style="direction: rtl;"
      >

        <i
          data-lucide="wrench"
          class="w-5 h-5"
        ></i>

        <span class="text-sm font-[Vazirmatn]">
          ابزارآلات و تجهیزات
        </span>

      </div>


      <!-- کتاب و هنر -->
      <div
        data-category="books"
        class="flex items-center gap-3 px-5 py-4
               cursor-pointer
               hover:bg-gray-50
               hover:text-red-600
               transition-colors"
        style="direction: rtl;"
      >

        <i
          data-lucide="book-open"
          class="w-5 h-5"
        ></i>

        <span class="text-sm font-[Vazirmatn]">
          کتاب و هنر
        </span>

      </div>


      <!-- ورزش و سفر -->
      <div
        data-category="sport"
        class="flex items-center gap-3 px-5 py-4
               cursor-pointer
               hover:bg-gray-50
               hover:text-red-600
               transition-colors"
        style="direction: rtl;"
      >

        <i
          data-lucide="dumbbell"
          class="w-5 h-5"
        ></i>

        <span class="text-sm font-[Vazirmatn]">
          ورزش و سفر
        </span>

      </div>


      <!-- کارت هدیه -->
      <div
        data-category="gift"
        class="flex items-center gap-3 px-5 py-4
               cursor-pointer
               hover:bg-gray-50
               hover:text-red-600
               transition-colors"
        style="direction: rtl;"
      >

        <i
          data-lucide="gift"
          class="w-5 h-5"
        ></i>

        <span class="text-sm font-[Vazirmatn]">
          کارت هدیه و گیفت کارت
        </span>

      </div>


      <!-- سوپرمارکت -->
      <div
        data-category="supermarket"
        class="flex items-center gap-3 px-5 py-4
               cursor-pointer
               hover:bg-gray-50
               hover:text-red-600
               transition-colors"
        style="direction: rtl;"
      >

        <i
          data-lucide="shopping-basket"
          class="w-5 h-5"
        ></i>

        <span class="text-sm font-[Vazirmatn]">
          سوپرمارکت آنلاین
        </span>

      </div>


      <!-- کودک -->
      <div
        data-category="baby"
        class="flex items-center gap-3 px-5 py-4
               cursor-pointer
               hover:bg-gray-50
               hover:text-red-600
               transition-colors"
        style="direction: rtl;"
      >

        <i
          data-lucide="baby"
          class="w-5 h-5"
        ></i>

        <span class="text-sm font-[Vazirmatn]">
          اسباب بازی و کودک و نوزاد
        </span>

      </div>


      <!-- محصولات بومی -->
      <div
        data-category="local"
        class="flex items-center gap-3 px-5 py-4
               cursor-pointer
               hover:bg-gray-50
               hover:text-red-600
               transition-colors"
        style="direction: rtl;"
      >

        <i
          data-lucide="map-pin"
          class="w-5 h-5"
        ></i>

        <span class="text-sm font-[Vazirmatn]">
          محصولات بومی و محلی
        </span>

      </div>


      <!-- پت شاپ -->
      <div
        data-category="pet"
        class="flex items-center gap-3 px-5 py-4
               cursor-pointer
               hover:bg-gray-50
               hover:text-red-600
               transition-colors"
        style="direction: rtl;"
      >

        <i
          data-lucide="paw-print"
          class="w-5 h-5"
        ></i>

        <span class="text-sm font-[Vazirmatn]">
          پت شاپ
        </span>

      </div>

    </div>

  </div>

</div>



      <!-- لینک های منو -->
      <nav
        class="flex items-center gap-7 text-sm text-gray-600 mr-6 whitespace-nowrap"
      >

        <!-- شگفت انگیز -->
        <a
  href="#"
  class="relative flex items-center gap-2
         text-sm font-[Vazirmatn]
         cursor-pointer
         after:content-['']
         after:absolute
         after:right-0
         after:-bottom-2
         after:h-[2px]
         after:w-0
         after:bg-red-600
         after:transition-all
         after:duration-300
         hover:after:w-full"
>

  <i
    data-lucide="percent"
    class="w-4 h-4"
  ></i>

  <span>
    شگفت‌انگیزها
  </span>

</a>


        <!-- سوپرمارکت -->
        <a
  href="#"
  class="relative flex items-center gap-2
         text-sm font-[Vazirmatn]
         cursor-pointer
         after:content-['']
         after:absolute
         after:right-0
         after:-bottom-2
         after:h-[2px]
         after:w-0
         after:bg-red-600
         after:transition-all
         after:duration-300
         hover:after:w-full"
>

          <i
            data-lucide="shopping-basket"
            class="w-4 h-4"
          ></i>

          <span>
            سوپرمارکت
          </span>

        </a>


        <!-- طلا و نقره -->
        <a
  href="#"
  class="relative flex items-center gap-2
         text-sm font-[Vazirmatn]
         cursor-pointer
         after:content-['']
         after:absolute
         after:right-0
         after:-bottom-2
         after:h-[2px]
         after:w-0
         after:bg-red-600
         after:transition-all
         after:duration-300
         hover:after:w-full"
>

          <i
            data-lucide="medal"
            class="w-4 h-4"
          ></i>

          <span>
            طلا و نقره دیجیتال
          </span>

        </a>


        <!-- پرفروش ترین -->
        <a
  href="#"
  class="relative flex items-center gap-2
         text-sm font-[Vazirmatn]
         cursor-pointer
         after:content-['']
         after:absolute
         after:right-0
         after:-bottom-2
         after:h-[2px]
         after:w-0
         after:bg-red-600
         after:transition-all
         after:duration-300
         hover:after:w-full"
>

          <i
            data-lucide="flame"
            class="w-4 h-4"
          ></i>

          <span>
            پرفروش‌ترین‌ها
          </span>

        </a>


        <!-- دیجی استایل -->
        <a
  href="#"
  class="relative flex items-center gap-2
         text-sm font-[Vazirmatn]
         cursor-pointer
         after:content-['']
         after:absolute
         after:right-0
         after:-bottom-2
         after:h-[2px]
         after:w-0
         after:bg-red-600
         after:transition-all
         after:duration-300
         hover:after:w-full"
>

          <i
            data-lucide="shirt"
            class="w-4 h-4"
          ></i>

          <span>
            دیجی‌استایل
          </span>

        </a>


        <!-- فروشنده شوید -->
        <a
  href="#"
  class="relative flex items-center gap-2
         text-sm font-[Vazirmatn]
         cursor-pointer
         after:content-['']
         after:absolute
         after:right-0
         after:-bottom-2
         after:h-[2px]
         after:w-0
         after:bg-red-600
         after:transition-all
         after:duration-300
         hover:after:w-full"
>

          <span>
            در دیجی‌کالا بفروشید!
          </span>

        </a>

      </nav>


      <!-- ارسال به آدرس -->
      <div
  class="mr-97 flex items-center gap-2
         text-sm text-gray-600
         whitespace-nowrap
         cursor-pointer
         
         "
>

  <i
    data-lucide="map-pin"
    class="w-5 h-5"
  ></i>

  <span>
    تحویل به آدرس شما
  </span>

</div>

    </div>

  </header>
`;
// باز کردن زیرمنو با رفتن موس روی دسته‌بندی
const categories = document.querySelectorAll('[data-category]');
const submenus = document.querySelectorAll('[data-submenu]');

categories.forEach(category => {
  category.addEventListener('mouseenter', () => {
    const categoryName = category.dataset.category;

    submenus.forEach(submenu => {
      if (submenu.dataset.submenu === categoryName) {
        submenu.classList.remove('hidden');
      } else {
        submenu.classList.add('hidden');
      }
    });
  });
});
// فعال کردن آیکن‌های Lucide
lucide.createIcons();

// ========================================
// اسلایدر اصلی
// ========================================

const slidesContainer = document.getElementById("slides");
const slides = document.querySelectorAll(".slide");

const dots = document.querySelectorAll(".slider-dot");

const prevButton = document.getElementById("prevSlide");
const nextButton = document.getElementById("nextSlide");

const mainSlider = document.getElementById("mainSlider");

let currentSlide = 0;

let isDragging = false;
let startX = 0;
let dragDistance = 0;


// ========================================
// نمایش اسلاید
// ========================================

function showSlide(index, animate = true) {

  if (index >= slides.length) {
    currentSlide = 0;
  } 
  else if (index < 0) {
    currentSlide = slides.length - 1;
  } 
  else {
    currentSlide = index;
  }


  // انیمیشن
  if (animate) {
    slidesContainer.style.transition =
      "transform 350ms ease-out";
  } else {
    slidesContainer.style.transition = "none";
  }


  slidesContainer.style.transform =
    `translate3d(-${currentSlide * 100}%, 0, 0)`;


  // نقطه‌ها
  dots.forEach((dot, index) => {

    if (index === currentSlide) {

      dot.classList.remove("bg-white/50");
      dot.classList.add("bg-white");

    } else {

      dot.classList.remove("bg-white");
      dot.classList.add("bg-white/50");

    }

  });

}


// ========================================
// دکمه قبلی
// ========================================

prevButton.addEventListener("click", () => {

  showSlide(currentSlide - 1);

});


// ========================================
// دکمه بعدی
// ========================================

nextButton.addEventListener("click", () => {

  showSlide(currentSlide + 1);

});


// ========================================
// نقطه‌ها
// ========================================

dots.forEach((dot) => {

  dot.addEventListener("click", () => {

    const index = Number(dot.dataset.index);

    showSlide(index);

  });

});


// ========================================
// شروع Drag
// ========================================

mainSlider.addEventListener("mousedown", (event) => {

  if (event.button !== 0) return;

  isDragging = true;

  startX = event.clientX;

  dragDistance = 0;

  // خاموش کردن انیمیشن هنگام کشیدن
  slidesContainer.style.transition = "none";

  mainSlider.classList.remove("cursor-grab");
  mainSlider.classList.add("cursor-grabbing");

  event.preventDefault();

});


// ========================================
// حرکت هنگام Drag
// ========================================

mainSlider.addEventListener("mousemove", (event) => {

  if (!isDragging) return;

  const currentX = event.clientX;

  dragDistance = currentX - startX;


  const sliderWidth = mainSlider.offsetWidth;


  // مقدار حرکت اسلاید فعلی
  const basePosition =
    -(currentSlide * sliderWidth);


  // موقعیت جدید
  let newPosition =
    basePosition + dragDistance;


  /*
    جلوگیری از سفید شدن:
    در اولین اسلاید اجازه نمی‌دهیم
    بیشتر از محدوده سمت راست کشیده شود.
  */

  if (currentSlide === 0 && dragDistance > 0) {

    newPosition =
      basePosition + dragDistance * 0.25;

  }


  /*
    در آخرین اسلاید هم اجازه نمی‌دهیم
    از محدوده سمت چپ خارج شود.
  */

  if (
    currentSlide === slides.length - 1 &&
    dragDistance < 0
  ) {

    newPosition =
      basePosition + dragDistance * 0.25;

  }


  slidesContainer.style.transform =
    `translate3d(${newPosition}px, 0, 0)`;

});


// ========================================
// رها کردن موس
// ========================================

document.addEventListener("mouseup", () => {

  if (!isDragging) return;

  isDragging = false;

  mainSlider.classList.remove("cursor-grabbing");
  mainSlider.classList.add("cursor-grab");


  const threshold = 80;


  // کشیدن به چپ → بعدی
  if (dragDistance < -threshold) {

    showSlide(currentSlide + 1);

  }

  // کشیدن به راست → قبلی
  else if (dragDistance > threshold) {

    showSlide(currentSlide - 1);

  }

  // اگر کم کشیده شد، برگردد
  else {

    showSlide(currentSlide);

  }


  dragDistance = 0;

});


// ========================================
// جلوگیری از Drag خود عکس
// ========================================

slides.forEach((slide) => {

  const image = slide.querySelector("img");

  if (image) {

    image.setAttribute("draggable", "false");

  }

});


// ========================================
// حالت اولیه
// ========================================

mainSlider.classList.add("cursor-grab");

showSlide(0, false);


 // =========================================
// اسلایدر شگفت‌انگیزها با API دیجی‌کالا
// دریافت محصول، عکس، قیمت، تخفیف و Drag
// =========================================

const dealViewport = document.getElementById("dealViewport");
const dealTrack = document.getElementById("dealTrack");
const dealPrev = document.getElementById("dealPrev");
const dealNext = document.getElementById("dealNext");

// =========================================
// ابزارهای کمکی
// =========================================

function dealFormatPrice(price) {
  return Number(price).toLocaleString("fa-IR");
}

function dealEscapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[char];
  });
}

// =========================================
// دریافت محصولات از API
// =========================================

async function loadAmazingOffers() {
  if (!dealViewport || !dealTrack) {
    console.warn("عناصر اسلایدر شگفت‌انگیزها در HTML پیدا نشدند.");
    return;
  }

  dealTrack.innerHTML = `
    <div class="w-[190px] shrink-0 rounded-lg bg-white p-4 text-sm">
      در حال دریافت محصولات...
    </div>
  `;

  try {
   const response = await fetch(
  "https://digikala-project3.onrender.com/api/v1/incredible-offers/"
);

    if (!response.ok) {
      throw new Error(`خطای دریافت API: ${response.status}`);
    }

    const result = await response.json();

    const products =
      result.data?.deal_of_the_day_products?.products ?? [];

    if (!products.length) {
      dealTrack.innerHTML = `
        <div class="w-[190px] shrink-0 rounded-lg bg-white p-4 text-sm">
          محصولی برای نمایش پیدا نشد.
        </div>
      `;
      return;
    }

    dealTrack.innerHTML = products.map((product) => {
      const title = dealEscapeHTML(
        product.title_fa || "محصول شگفت‌انگیز"
      );

      const priceInfo = product.default_variant?.price;

      // قیمت‌های API دیجی‌کالا معمولاً ریال هستند.
      // برای نمایش تومان، بر 10 تقسیم می‌کنیم.
      const sellingPrice = Number(priceInfo?.selling_price ?? 0) / 10;
      const originalPrice = Number(priceInfo?.rrp_price ?? 0) / 10;

      const discount =
        originalPrice > sellingPrice && originalPrice > 0
          ? Math.round(
              ((originalPrice - sellingPrice) / originalPrice) * 100
            )
          : 0;

      const image =
        product.images?.main?.webp_url?.[0] ||
        product.images?.main?.url?.[0] ||
        "";

      const safeImage = dealEscapeHTML(image);

      return `
        <article
          class="deal-card w-[190px] shrink-0 rounded-lg bg-white p-3"
          dir="rtl"
        >
          <div
            class="relative flex h-[190px] w-full items-center justify-center
                   overflow-hidden rounded-lg bg-gray-100"
          >
            

            ${
              safeImage
                ? `
                  <img
                    src="${safeImage}"
                    alt="${title}"
                    class="h-full w-full object-contain"
                    draggable="false"
                    loading="lazy"
                  >
                `
                : `
                  <span class="text-xs text-gray-400">
                    تصویر موجود نیست
                  </span>
                `
            }
          </div>

          <p
            class="mt-3 h-[48px] overflow-hidden text-sm
                   leading-6 text-gray-700"
            title="${title}"
          >
            ${title}
          </p>

          <div class="mt-4 flex items-center justify-between gap-2">
            ${
              discount > 0
                ? `
                  <span
                    class="rounded-full bg-[#ef394e] px-2 py-1
                           text-xs text-white"
                  >
                    ${dealFormatPrice(discount)}٪
                  </span>
                `
                : '<span></span>'
            }

            <span class="text-sm font-bold text-gray-900">
              ${dealFormatPrice(sellingPrice)}
              <span class="text-xs font-normal">تومان</span>
            </span>
          </div>

          ${
            discount > 0
              ? `
                <div
                  class="mt-1 text-left text-xs text-gray-400 line-through"
                >
                  ${dealFormatPrice(originalPrice)}
                </div>
              `
              : '<div class="mt-1 h-4"></div>'
          }
        </article>
      `;
    }).join("");

    // ساخت آیکون‌های Lucide در صورت فعال بودن کتابخانه
    if (window.lucide) {
      window.lucide.createIcons();
    }

    // فعال کردن اسلایدر بعد از ساخت کارت‌ها
    setupAmazingOffersSlider();

  } catch (error) {
    console.error("خطا در دریافت شگفت‌انگیزها:", error);

    dealTrack.innerHTML = `
      <div class="w-[220px] shrink-0 rounded-lg bg-white p-4 text-sm text-red-600">
        دریافت محصولات ناموفق بود. Console را بررسی کن.
      </div>
    `;
  }
}

// =========================================
// کنترل اسلایدر و Drag با موس
// =========================================


function setupAmazingOffersSlider() {
  if (!dealViewport || !dealTrack) return;

  // جلوگیری از ثبت دوباره رویدادها
  if (dealViewport.dataset.sliderReady === "true") return;
  dealViewport.dataset.sliderReady = "true";

  let isDragging = false;
  let startX = 0;
  let startTranslate = 0;
  let currentTranslate = 0;
  let hasMoved = false;

  function getMaxTranslate() {
    return Math.max(
      0,
      dealTrack.scrollWidth - dealViewport.clientWidth
    );
  }

  function setPosition(position, animate = true) {
    const max = getMaxTranslate();

    currentTranslate = Math.max(0, Math.min(position, max));

    dealTrack.style.transition = animate
      ? "transform 300ms ease"
      : "none";

    dealTrack.style.transform =
      `translate3d(${-currentTranslate}px, 0, 0)`;
  }

  // دکمه راست
  if (dealPrev) {
    dealPrev.addEventListener("click", () => {
      setPosition(currentTranslate + 200);
    });
  }

  // دکمه چپ
  if (dealNext) {
    dealNext.addEventListener("click", () => {
      setPosition(currentTranslate - 200);
    });
  }

  // شروع کشیدن با موس
  dealViewport.addEventListener("mousedown", (event) => {
    if (event.button !== 0) return;
    if (event.target.closest("button")) return;

    isDragging = true;
    hasMoved = false;
    startX = event.clientX;
    startTranslate = currentTranslate;

    dealTrack.style.transition = "none";
    dealViewport.classList.remove("cursor-grab");
    dealViewport.classList.add("cursor-grabbing");

    event.preventDefault();
  });

  // حرکت موس
  document.addEventListener("mousemove", (event) => {
    if (!isDragging) return;

    const distance = event.clientX - startX;

    if (Math.abs(distance) > 3) {
      hasMoved = true;
    }

    setPosition(startTranslate - distance, false);
  });

  // پایان کشیدن
  function stopDragging() {
    if (!isDragging) return;

    isDragging = false;

    dealViewport.classList.remove("cursor-grabbing");
    dealViewport.classList.add("cursor-grab");

    setPosition(currentTranslate, true);
  }

  document.addEventListener("mouseup", stopDragging);
  window.addEventListener("blur", stopDragging);

  // جلوگیری از انتخاب متن و کشیدن عکس
  dealViewport.style.userSelect = "none";
  dealViewport.style.webkitUserSelect = "none";

  dealTrack.querySelectorAll("img").forEach((img) => {
    img.draggable = false;
    img.addEventListener("dragstart", (event) => {
      event.preventDefault();
    });
  });

  // اگر اندازه صفحه تغییر کرد، موقعیت را تنظیم کن
  window.addEventListener("resize", () => {
    setPosition(currentTranslate, false);
  });

  dealViewport.classList.add("cursor-grab");
  dealTrack.style.willChange = "transform";

  setPosition(0, false);
}

// =========================================
// اجرای دریافت محصولات
// =========================================

loadAmazingOffers();
console.log("اسکریپت شگفت‌انگیزها اجرا شد");


//=================================
//ویتامین ها
const vitaminViewport = document.getElementById("vitaminViewport");
const vitaminTrack = document.getElementById("vitaminTrack");
const vitaminPrev = document.getElementById("vitaminPrev");
const vitaminNext = document.getElementById("vitaminNext");

if (vitaminViewport && vitaminTrack) {
  let position = 0;
  let isDragging = false;
  let startX = 0;
  let startPosition = 0;

  function getVitaminMaxPosition() {
    return Math.max(
      0,
      vitaminTrack.scrollWidth - vitaminViewport.clientWidth
    );
  }

  function moveVitaminSlider(newPosition, animate = true) {
    position = Math.max(
      0,
      Math.min(newPosition, getVitaminMaxPosition())
    );

    vitaminTrack.style.transition = animate
      ? "transform 300ms ease"
      : "none";

    vitaminTrack.style.transform =
      `translate3d(${position}px, 0, 0)`;
  }

  vitaminPrev?.addEventListener("click", (event) => {
    event.stopPropagation();
    moveVitaminSlider(position - 200);
  });

  vitaminNext?.addEventListener("click", (event) => {
    event.stopPropagation();
    moveVitaminSlider(position + 200);
  });

  vitaminViewport.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    if (event.target.closest("button")) return;

    isDragging = true;
    startX = event.clientX;
    startPosition = position;

    vitaminTrack.style.transition = "none";
    vitaminViewport.classList.remove("cursor-grab");
    vitaminViewport.classList.add("cursor-grabbing");

    vitaminViewport.setPointerCapture(event.pointerId);
  });

  vitaminViewport.addEventListener("pointermove", (event) => {
    if (!isDragging) return;

    const distance = event.clientX - startX;

    moveVitaminSlider(startPosition + distance, false);
  });

  function stopVitaminDragging(event) {
    if (!isDragging) return;

    isDragging = false;

    vitaminViewport.classList.remove("cursor-grabbing");
    vitaminViewport.classList.add("cursor-grab");

    if (vitaminViewport.hasPointerCapture(event.pointerId)) {
      vitaminViewport.releasePointerCapture(event.pointerId);
    }
  }

  vitaminViewport.addEventListener("pointerup", stopVitaminDragging);
  vitaminViewport.addEventListener("pointercancel", stopVitaminDragging);

  vitaminViewport.style.touchAction = "pan-y";
  vitaminViewport.style.userSelect = "none";
  vitaminViewport.classList.add("cursor-grab");

  async function loadVitaminProducts() {
    vitaminTrack.innerHTML = `
      <p class="py-8 text-gray-500">
        در حال دریافت محصولات...
      </p>
    `;

    try {
      const response = await fetch(
        "/api/v1/search/?q=" + encodeURIComponent("ویتامین")
      );

      if (!response.ok) {
        throw new Error(`خطای API: ${response.status}`);
      }

      const data = await response.json();
      const products = data.data?.products || [];

      if (!products.length) {
        throw new Error("محصولی پیدا نشد.");
      }

      vitaminTrack.innerHTML = "";

      products.forEach((product) => {
        const title =
          product.title_fa ||
          product.title ||
          "محصول ویتامین";

        const imageUrl =
          product.images?.main?.url?.[0] ||
          product.images?.main?.webp_url?.[0] ||
          "";

        const price =
          product.default_variant?.price?.selling_price;

        const card = document.createElement("article");

        card.className =
          "w-44 shrink-0 rounded-lg border border-gray-100 bg-white p-3 text-right";

        const image = document.createElement("img");

        image.className = "mb-3 h-36 w-full object-contain";
        image.alt = title;
        image.loading = "lazy";
        image.draggable = false;

        if (imageUrl) {
          image.src = imageUrl;
        }

        const name = document.createElement("p");

        name.className =
          "mb-3 min-h-12 text-sm leading-6 text-gray-700 line-clamp-2";

        name.textContent = title;

        card.append(image, name);

        if (price != null) {
          const priceElement = document.createElement("p");

          priceElement.className =
            "text-sm font-bold text-gray-800";

          priceElement.textContent =
            `${new Intl.NumberFormat("fa-IR").format(price / 10)} تومان`;

          card.appendChild(priceElement);
        }

        vitaminTrack.appendChild(card);
      });

      position = 0;

      requestAnimationFrame(() => {
        moveVitaminSlider(0, false);
      });
    } catch (error) {
      console.error("خطا در دریافت محصولات ویتامین:", error);

      vitaminTrack.innerHTML = `
        <p class="py-8 text-red-500">
          دریافت محصولات ناموفق بود.
        </p>
      `;
    }
  }

  window.addEventListener("resize", () => {
    moveVitaminSlider(position, false);
  });

  loadVitaminProducts();
}

// ======================================
// کیف و کاور گوشی با API دیجی‌کالا
// ======================================

const caseViewport = document.getElementById("caseViewport");
const caseTrack = document.getElementById("caseTrack");
const casePrev = document.getElementById("casePrev");
const caseNext = document.getElementById("caseNext");

if (caseViewport && caseTrack) {
  let casePosition = 0;
  let caseIsDragging = false;
  let caseStartX = 0;
  let caseStartPosition = 0;

  function getCaseMaxPosition() {
    return Math.max(
      0,
      caseTrack.scrollWidth - caseViewport.clientWidth
    );
  }

  function moveCaseSlider(newPosition, animate = true) {
    casePosition = Math.max(
      0,
      Math.min(newPosition, getCaseMaxPosition())
    );

    caseTrack.style.transition = animate
      ? "transform 300ms ease"
      : "none";

    caseTrack.style.transform =
      `translate3d(${casePosition}px, 0, 0)`;
  }

  // دکمه قبلی
  casePrev?.addEventListener("click", () => {
    moveCaseSlider(casePosition - 200);
  });

  // دکمه بعدی
  caseNext?.addEventListener("click", () => {
    moveCaseSlider(casePosition + 200);
  });

  // شروع کشیدن اسلایدر
  caseViewport.addEventListener("pointerdown", (event) => {
    if (event.target.closest("button")) return;

    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    caseIsDragging = true;
    caseStartX = event.clientX;
    caseStartPosition = casePosition;

    caseTrack.style.transition = "none";

    caseViewport.classList.remove("cursor-grab");
    caseViewport.classList.add("cursor-grabbing");

    caseViewport.setPointerCapture(event.pointerId);
  });

  // حرکت موس
  caseViewport.addEventListener("pointermove", (event) => {
    if (!caseIsDragging) return;

    const distance = event.clientX - caseStartX;

    moveCaseSlider(
      caseStartPosition + distance,
      false
    );
  });

  // پایان کشیدن
  function stopCaseDragging(event) {
    if (!caseIsDragging) return;

    caseIsDragging = false;

    caseViewport.classList.remove("cursor-grabbing");
    caseViewport.classList.add("cursor-grab");

    if (caseViewport.hasPointerCapture(event.pointerId)) {
      caseViewport.releasePointerCapture(event.pointerId);
    }
  }

  caseViewport.addEventListener("pointerup", stopCaseDragging);
  caseViewport.addEventListener("pointercancel", stopCaseDragging);

  caseViewport.style.touchAction = "pan-y";
  caseViewport.classList.add("cursor-grab");

  // دریافت محصولات از API خود دیجی‌کالا
  async function loadCaseProducts() {
    caseTrack.innerHTML = `
      <p class="py-8 text-gray-500">
        در حال دریافت محصولات...
      </p>
    `;

    try {
      const response = await fetch(
  "/api/v1/search/?q=" + encodeURIComponent("قاب گوشی")
);

      if (!response.ok) {
        throw new Error(`خطای API: ${response.status}`);
      }

      const data = await response.json();
      const products = data.data?.products || [];

      if (products.length === 0) {
        throw new Error("محصولی پیدا نشد.");
      }

      caseTrack.innerHTML = "";

      products.forEach((product) => {
        const title =
          product.title_fa ||
          product.title ||
          "کیف و کاور گوشی";

        const imageUrl =
  product.images?.main?.webp_url?.[0] ||
  product.images?.main?.url?.[0] ||
  "";

        const price =
          product.default_variant?.price?.selling_price;

        const card = document.createElement("article");

        card.className =
          "w-44 shrink-0 rounded-lg border border-gray-100 p-3 text-right";

        const image = document.createElement("img");

        image.src = Array.isArray(imageUrl)
          ? imageUrl[0]
          : imageUrl;

        image.alt = title;
        image.loading = "lazy";
        image.draggable = false;

        image.className =
          "mb-3 h-36 w-full object-contain";

        const name = document.createElement("p");

        name.className =
          "mb-3 line-clamp-2 min-h-12 text-sm leading-6 text-gray-700";

        name.textContent = title;

        card.append(image, name);

        if (price) {
          const priceElement = document.createElement("p");

          priceElement.className =
            "text-sm font-bold text-gray-800";

          priceElement.textContent =
            `${new Intl.NumberFormat("fa-IR").format(price / 10)} تومان`;

          card.appendChild(priceElement);
        }

        caseTrack.appendChild(card);
      });

      casePosition = 0;

      requestAnimationFrame(() => {
        moveCaseSlider(0, false);
      });
    } catch (error) {
      console.error("خطا در دریافت کیف و کاور گوشی:", error);

      caseTrack.innerHTML = `
        <p class="py-8 text-red-500">
          دریافت محصولات ناموفق بود.
        </p>
      `;
    }
  }

  window.addEventListener("resize", () => {
    moveCaseSlider(casePosition, false);
  });

  loadCaseProducts();
}

// ======================================
// بخش کتاب‌ها با API واقعی دیجی‌کالا
// ======================================

const bookViewport = document.getElementById("bookViewport");
const bookTrack = document.getElementById("bookTrack");
const bookPrev = document.getElementById("bookPrev");
const bookNext = document.getElementById("bookNext");

if (bookViewport && bookTrack) {
  let bookPosition = 0;
  let bookIsDragging = false;
  let bookStartX = 0;
  let bookStartPosition = 0;

  // دریافت کتاب‌ها از API دیجی‌کالا
  async function loadBooks() {
    bookTrack.innerHTML = `
      <p class="w-full py-8 text-center text-gray-500">
        در حال دریافت کتاب‌ها...
      </p>
    `;

    try {
      const response = await fetch(
        "/api/v1/search/?q=کتاب"
      );

      if (!response.ok) {
        throw new Error(`خطای API: ${response.status}`);
      }

      const data = await response.json();

      const products = data.data?.products || [];

      if (products.length === 0) {
        throw new Error("محصولی از API دریافت نشد.");
      }

      bookTrack.innerHTML = "";

      products.forEach((product) => {
        const title =
          product.title_fa ||
          product.title ||
          "کتاب";

        const imageUrl =
          product.images?.main?.url?.[0] ||
          product.image ||
          "";

        const price =
          product.default_variant?.price?.selling_price;

        const card = document.createElement("article");

        card.className =
          "w-44 shrink-0 rounded-lg border border-gray-100 p-3 text-right";

        const image = document.createElement("img");

        image.src = Array.isArray(imageUrl)
          ? imageUrl[0]
          : imageUrl;

        image.alt = title;
        image.loading = "lazy";
        image.draggable = false;

        image.className =
          "mb-3 h-36 w-full object-contain";

        const name = document.createElement("p");

        name.className =
          "mb-3 line-clamp-2 min-h-12 text-sm leading-6 text-gray-700";

        name.textContent = title;

        card.append(image, name);

        if (price) {
          const priceElement = document.createElement("p");

          priceElement.className =
            "text-sm font-bold text-gray-800";

          priceElement.textContent =
            `${new Intl.NumberFormat("fa-IR").format(price / 10)} تومان`;

          card.appendChild(priceElement);
        }

        bookTrack.appendChild(card);
      });

      bookPosition = 0;
      moveBookSlider(0, false);
    } catch (error) {
      console.error("خطا در دریافت کتاب‌ها:", error);

      bookTrack.innerHTML = `
        <p class="w-full py-8 text-center text-red-500">
          دریافت کتاب‌ها ناموفق بود.
          کنسول مرورگر را برای جزئیات بررسی کنید.
        </p>
      `;
    }
  }

  function getBookMaxPosition() {
    return Math.max(
      0,
      bookTrack.scrollWidth - bookViewport.clientWidth
    );
  }

  function moveBookSlider(newPosition, animate = true) {
  bookPosition = Math.max(
    0,
    Math.min(newPosition, getBookMaxPosition())
  );

  bookTrack.style.transition = animate
    ? "transform 300ms ease"
    : "none";

  bookTrack.style.transform =
    `translate3d(${bookPosition}px, 0, 0)`;
}

  // حرکت با دکمه‌ها
  bookPrev?.addEventListener("click", () => {
    moveBookSlider(bookPosition - 200);
  });

  bookNext?.addEventListener("click", () => {
    moveBookSlider(bookPosition + 200);
  });

  // کشیدن با موس و لمس
  bookViewport.addEventListener("pointerdown", (event) => {
    if (event.target.closest("button")) return;

    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    bookIsDragging = true;
    bookStartX = event.clientX;
    bookStartPosition = bookPosition;

    bookTrack.style.transition = "none";

    bookViewport.classList.remove("cursor-grab");
    bookViewport.classList.add("cursor-grabbing");

    bookViewport.setPointerCapture(event.pointerId);
  });

  bookViewport.addEventListener("pointermove", (event) => {
    if (!bookIsDragging) return;

    const distance = event.clientX - bookStartX;

    moveBookSlider(
      bookStartPosition + distance,
      false
    );
  });

  function stopBookDragging(event) {
    if (!bookIsDragging) return;

    bookIsDragging = false;

    bookViewport.classList.remove("cursor-grabbing");
    bookViewport.classList.add("cursor-grab");

    if (bookViewport.hasPointerCapture(event.pointerId)) {
      bookViewport.releasePointerCapture(event.pointerId);
    }
  }

  bookViewport.addEventListener("pointerup", stopBookDragging);
  bookViewport.addEventListener("pointercancel", stopBookDragging);

  bookViewport.style.touchAction = "pan-y";
  bookViewport.classList.add("cursor-grab");

  window.addEventListener("resize", () => {
    moveBookSlider(bookPosition, false);
  });

  loadBooks();
}
// اسلایدر داغ‌ترین محصولات دیجی‌کالا

const hotProductsContainer = document.getElementById("hotProducts");
const hotViewport = document.getElementById("hotViewport");
const hotPrev = document.getElementById("hotPrev");
const hotNext = document.getElementById("hotNext");

if (hotProductsContainer && hotViewport) {
  let hotPosition = 0;
  let hotIsDragging = false;
  let hotStartX = 0;
  let hotStartPosition = 0;

  function getHotMaxPosition() {
    return Math.max(
      0,
      hotProductsContainer.scrollWidth - hotViewport.clientWidth
    );
  }

  function moveHotSlider(newPosition, animate = true) {
    hotPosition = Math.max(
      0,
      Math.min(newPosition, getHotMaxPosition())
    );

    hotProductsContainer.style.transition = animate
      ? "transform 300ms ease"
      : "none";

    hotProductsContainer.style.transform =
      `translate3d(${hotPosition}px, 0, 0)`;
  }

  // حرکت به محصولات قبلی
  hotPrev?.addEventListener("click", () => {
    const card = hotProductsContainer.firstElementChild;

    if (!card) return;

    const distance = card.getBoundingClientRect().width + 16;

    moveHotSlider(hotPosition - distance);
  });

  // حرکت به محصولات بعدی
  hotNext?.addEventListener("click", () => {
    const card = hotProductsContainer.firstElementChild;

    if (!card) return;

    const distance = card.getBoundingClientRect().width + 16;

    moveHotSlider(hotPosition + distance);
  });

  // کشیدن اسلایدر با موس
  hotViewport.addEventListener("pointerdown", (event) => {
    if (event.target.closest("button")) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;

    hotIsDragging = true;
    hotStartX = event.clientX;
    hotStartPosition = hotPosition;

    hotProductsContainer.style.transition = "none";

    hotViewport.classList.add("cursor-grabbing");
    hotViewport.classList.remove("cursor-grab");

    hotViewport.setPointerCapture(event.pointerId);
  });

  hotViewport.addEventListener("pointermove", (event) => {
    if (!hotIsDragging) return;

    const distance = event.clientX - hotStartX;

    moveHotSlider(hotStartPosition + distance, false);
  });

  function stopHotDragging(event) {
    if (!hotIsDragging) return;

    hotIsDragging = false;

    hotViewport.classList.remove("cursor-grabbing");
    hotViewport.classList.add("cursor-grab");

    if (hotViewport.hasPointerCapture(event.pointerId)) {
      hotViewport.releasePointerCapture(event.pointerId);
    }
  }

  hotViewport.addEventListener("pointerup", stopHotDragging);
  hotViewport.addEventListener("pointercancel", stopHotDragging);

  hotViewport.style.touchAction = "pan-y";
  hotViewport.classList.add("cursor-grab");

  // دریافت محصولات از API دیجی‌کالا
  async function loadHotProducts() {
    hotProductsContainer.innerHTML = `
      <p class="py-8 text-center text-gray-500">
        در حال دریافت محصولات...
      </p>
    `;

    try {
      const response = await fetch("/api/v1/search/?q=تمام محصولات ");

      if (!response.ok) {
        throw new Error("خطا در دریافت محصولات");
      }

      const data = await response.json();
      const products = data.data?.products || [];

      if (!products.length) {
        throw new Error("محصولی پیدا نشد");
      }

      hotProductsContainer.innerHTML = "";

      products.slice(0, 15).forEach((product, index) => {
        const title =
          product.title_fa ||
          product.title ||
          "محصول دیجی‌کالا";

        const imageUrl =
          product.images?.main?.url?.[0] ||
          product.image ||
          "";

        const card = document.createElement("article");

        card.className =
          "flex min-w-0 items-center gap-3 border-b border-gray-100 p-3";

        const number = document.createElement("span");
        number.className = "shrink-0 text-2xl font-bold text-red-600";
        number.textContent = index + 1;

        const image = document.createElement("img");
        image.className = "h-20 w-20 shrink-0 object-contain";
        image.src = Array.isArray(imageUrl) ? imageUrl[0] : imageUrl;
        image.alt = title;
        image.draggable = false;
        image.loading = "lazy";

        const name = document.createElement("p");
        name.className = "line-clamp-2 text-sm leading-6 text-gray-700";
        name.textContent = title;

        card.append(number, image, name);
        hotProductsContainer.appendChild(card);
      });

      // تنظیم موقعیت اولیه پس از بارگذاری محصولات
      hotPosition = 0;

      requestAnimationFrame(() => {
        moveHotSlider(0, false);
      });
    } catch (error) {
      console.error("خطا در دریافت محصولات داغ:", error);

      hotProductsContainer.innerHTML = `
        <p class="py-8 text-center text-red-500">
          دریافت محصولات ناموفق بود.
        </p>
      `;
    }
  }

  loadHotProducts();

  window.addEventListener("resize", () => {
    moveHotSlider(hotPosition, false);
  });
}
fetch("/api/v1/search/?q=" + encodeURIComponent("کاور گوشی"))
  .then((response) => {
    if (!response.ok) {
      throw new Error(`خطای سرور: ${response.status}`);
    }

    return response.json();
  })
  .then((data) => {
    const products = data.data?.products || [];

    console.log("تعداد محصولات:", products.length);

    if (products.length > 0) {
      console.log("اطلاعات کامل محصول اول:", products[0]);
      console.log("اطلاعات تصاویر:", products[0].images);
      console.log(
        "آدرس تصویر اصلی:",
        products[0].images?.main?.url
      );
    }
  })
  .catch((error) => {
    console.error("خطا در دریافت اطلاعات:", error);
  });


  //=========================================
  // اسلایدر پرفروش‌ترین‌ها
  //=========================================
const bestProductsContainer = document.getElementById("bestProducts");
const bestViewport = document.getElementById("bestViewport");
const bestPrev = document.getElementById("bestPrev");
const bestNext = document.getElementById("bestNext");

if (bestProductsContainer && bestViewport) {
  let bestPosition = 0;
  let bestIsDragging = false;
  let bestStartX = 0;
  let bestStartPosition = 0;

  // محاسبه حداکثر حرکت
  function getBestMaxPosition() {
    return Math.max(
      0,
      bestProductsContainer.scrollWidth - bestViewport.clientWidth
    );
  }

  // حرکت اسلایدر
  function moveBestSlider(newPosition, animate = true) {
    bestPosition = Math.max(
      0,
      Math.min(newPosition, getBestMaxPosition())
    );

    bestProductsContainer.style.transition = animate
      ? "transform 300ms ease"
      : "none";

    bestProductsContainer.style.transform =
      `translate3d(${bestPosition}px, 0, 0)`;
  }

  // محصولات قبلی
  bestPrev?.addEventListener("click", () => {
    const card = bestProductsContainer.firstElementChild;
    if (!card) return;

    moveBestSlider(
      bestPosition - card.getBoundingClientRect().width - 16
    );
  });

  // محصولات بعدی
  bestNext?.addEventListener("click", () => {
    const card = bestProductsContainer.firstElementChild;
    if (!card) return;

    moveBestSlider(
      bestPosition + card.getBoundingClientRect().width + 16
    );
  });

  // شروع کشیدن با موس یا لمس
  bestViewport.addEventListener("pointerdown", (event) => {
    if (event.target.closest("button")) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;

    bestIsDragging = true;
    bestStartX = event.clientX;
    bestStartPosition = bestPosition;

    bestProductsContainer.style.transition = "none";

    bestViewport.classList.remove("cursor-grab");
    bestViewport.classList.add("cursor-grabbing");

    bestViewport.setPointerCapture(event.pointerId);
  });

  // حرکت موس
  bestViewport.addEventListener("pointermove", (event) => {
    if (!bestIsDragging) return;

    const distance = bestStartX - event.clientX;

    moveBestSlider(bestStartPosition - distance, false);
  });

  // پایان کشیدن
  function stopBestDragging(event) {
    if (!bestIsDragging) return;

    bestIsDragging = false;

    bestViewport.classList.remove("cursor-grabbing");
    bestViewport.classList.add("cursor-grab");

    if (bestViewport.hasPointerCapture(event.pointerId)) {
      bestViewport.releasePointerCapture(event.pointerId);
    }
  }

  bestViewport.addEventListener("pointerup", stopBestDragging);
  bestViewport.addEventListener("pointercancel", stopBestDragging);

  // جلوگیری از انتخاب متن و کشیده شدن تصاویر
  bestViewport.addEventListener("dragstart", (event) => {
    event.preventDefault();
  });

  bestViewport.style.userSelect = "none";
  bestViewport.style.webkitUserSelect = "none";
  bestViewport.style.touchAction = "pan-y";
  bestViewport.classList.add("cursor-grab");

  // دریافت محصولات از API
  async function loadBestProducts() {
    bestProductsContainer.innerHTML = `
      <p class="py-8 text-center text-gray-500">
        در حال دریافت محصولات...
      </p>
    `;

    try {
      const response = await fetch("/api/v1/search/?q=داغ ترین");

      if (!response.ok) {
        throw new Error(`خطای API: ${response.status}`);
      }

      const data = await response.json();
      const products = data.data?.products || [];

      if (products.length === 0) {
        throw new Error("محصولی پیدا نشد.");
      }

      bestProductsContainer.innerHTML = "";

      products.slice(0, 15).forEach((product, index) => {
        const title =
          product.title_fa ||
          product.title ||
          "محصول دیجی‌کالا";

        const imageUrl =
          product.images?.main?.url?.[0] ||
          product.image ||
          "";

        const card = document.createElement("article");

        card.className =
          "flex min-w-0 items-center gap-3 border-b border-gray-100 p-3";

        const number = document.createElement("span");
        number.className =
          "shrink-0 text-2xl font-bold text-sky-500";
        number.textContent = String(index + 1);

        const image = document.createElement("img");
        image.className = "h-20 w-20 shrink-0 object-contain";
        image.src = Array.isArray(imageUrl) ? imageUrl[0] : imageUrl;
        image.alt = title;
        image.draggable = false;
        image.loading = "lazy";
        image.style.pointerEvents = "none";

        const name = document.createElement("p");
        name.className =
          "line-clamp-2 text-sm leading-6 text-gray-700";
        name.textContent = title;

        card.append(number, image, name);
        bestProductsContainer.appendChild(card);
      });

      // چیدمان سه ردیف مانند اسلایدر داغ‌ترین‌ها
      bestProductsContainer.className =
        "grid grid-flow-col grid-rows-3 auto-cols-[calc((100%-2rem)/3)] gap-x-4";

      bestPosition = 0;

      requestAnimationFrame(() => {
        moveBestSlider(0, false);
      });
    } catch (error) {
      console.error("خطا در دریافت پرفروش‌ترین‌ها:", error);

      bestProductsContainer.innerHTML = `
        <p class="py-8 text-center text-red-500">
          دریافت محصولات ناموفق بود.
        </p>
      `;
    }
  }

  loadBestProducts();

  // تنظیم مجدد هنگام تغییر اندازه صفحه
  window.addEventListener("resize", () => {
    moveBestSlider(bestPosition, false);
  });
}
// بررسی ساختار محصولات شگفت‌انگیز
async function testAmazingOffersAPI() {
  try {
    const response = await fetch("/api/v1/incredible-offers/");
    const result = await response.json();

    const products = result.data.deal_of_the_day_products.products;

    console.log("تعداد محصولات:", products.length);
    console.log("محصول اول:", products[0]);
    console.log("اطلاعات عکس:", products[0]?.images);
    console.log("اطلاعات قیمت:", products[0]?.default_variant);
  } catch (error) {
    console.error("خطا در دریافت محصولات:", error);
  }
}

testAmazingOffersAPI();

const backToTopButton = document.getElementById("backToTop");

if (backToTopButton) {
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

const footerNewsletter = document.getElementById("footerNewsletter");
const newsletterMessage = document.getElementById("newsletterMessage");

if (footerNewsletter && newsletterMessage) {
  footerNewsletter.addEventListener("submit", (event) => {
    event.preventDefault();

    newsletterMessage.textContent =
      "برای ثبت واقعی ایمیل، اتصال به API خبرنامه لازم است.";
  });
}

const longText = document.getElementById("longText");
const toggleText = document.getElementById("toggleText");

if (longText && toggleText) {
  toggleText.addEventListener("click", () => {
    const isExpanded = longText.classList.toggle("line-clamp-2");

    if (isExpanded) {
      toggleText.textContent = "نمایش بیشتر";
    } else {
      toggleText.textContent = "نمایش کمتر";
    }
  });
}

