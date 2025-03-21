# Ogrenim-Icerim-App
Öğrenim İçeriğim Uygulaması 📚📱

Bu proje, kullanıcıların kurslarını yönetmelerine olanak tanıyan React Native tabanlı bir mobil uygulamadır. Kullanıcılar kurs ekleyebilir, güncelleyebilir ve silebilir. Tüm veriler Firebase Realtime Database ile saklanmaktadır.
📌 Projenin Amacı

Bu proje, öğrenme sürecini daha düzenli hale getirmek isteyen kullanıcılar için bir kurs yönetim platformu oluşturmayı hedefler. Kullanıcılar ekledikleri kursları istedikleri zaman güncelleyebilir veya silebilir.
🚀 Kullanılan Teknolojiler
Teknoloji	Kullanım Amacı
React Native	Mobil uygulama geliştirme
Firebase Realtime Database	Kurs verilerini saklama ve senkronizasyon
Context API	Uygulama genelinde veri yönetimi
Axios	API isteklerini gerçekleştirme
React Navigation	Sayfalar arasında geçiş yapma
🛠️ Proje Yapısı

📂 /components → Uygulamada kullanılan özel bileşenler (CourseForm vb.)<br>
📂 /screens → Farklı ekran bileşenleri (ManageCourses vb.)<br>
📂 /store → Context API ile uygulama durum yönetimi <br>
📂 /helper → Firebase bağlantılarını yöneten HTTP istekleri <br>
📂 /assets → Görseller ve statik dosyalar <br>
📌 Özellikler

✅ Kurs Ekleme: Kullanıcılar yeni bir kurs ekleyebilir.<br>
✅ Kurs Güncelleme: Mevcut kurs bilgileri düzenlenebilir.<br>
✅ Kurs Silme: Kullanıcılar gereksiz kursları kaldırabilir.<br>
✅ Kurs Listeleme: Kullanıcının eklediği tüm kursları listeleme ve görüntüleme.<br>
✅ Gerçek Zamanlı Veri Yönetimi: Firebase Realtime Database ile anlık veri kaydı ve senkronizasyon.<br>
✅ Durum Yönetimi: Context API ile kullanıcı verilerinin yönetimi.<br>
📲 Kurulum ve Çalıştırma

1️⃣ Gerekli bağımlılıkları yükleyin:

npm install

2️⃣ Expo veya bir emülatör ile projeyi çalıştırın:

npm start

veya

expo start

3️⃣ Mobil cihazda veya emülatörde test edin.
📌 Yapılacaklar & Geliştirme Aşamaları

🔹 Başlangıç:

    React Native proje kurulumu

    Firebase bağlantısının yapılması

🔹 Orta Aşama:

    Kurs ekleme ve listeleme işlemlerinin tamamlanması

    Güncelleme ve silme özelliklerinin eklenmesi

🔹 Son Aşama:

    Hata Yönetimi: API bağlantılarında hata mesajı gösterme ✅

    Kullanıcı Deneyimi: Uygulamaya Loading Spinner ekleme ✅

📌 API Kullanımı (helper/http.js)

Kurs verilerinin yönetimi için Firebase Realtime Database kullanılmıştır.<br>
Kurs Ekleme<br>

export async function storeCourse(courseData) {
    const response = await axios.post(url + 'courses.json', courseData);
    return response.data.name;
}

Kurs Güncelleme

export async function updateCourse(id, courseData) {
    await axios.put(`${url}courses/${id}.json`, courseData);
}

Kurs Silme

export async function deleteCourseHttp(id) {
    await axios.delete(`${url}courses/${id}.json`);
}


# Ekran Goruntusu

https://github.com/user-attachments/assets/4356d3db-bf4a-4831-b005-1098b8825aa4

# Backend Bağlantı Hatalarında Hata Mesajlarının Bastırılması durum

https://github.com/user-attachments/assets/86df141f-72c4-43a3-81f1-599261044f0b
