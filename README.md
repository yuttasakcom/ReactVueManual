## React Vue 101
ออกแบบมาเพื่อเชื่อมต่อ React และ Vue ซึ่งช่วยให้คุณสามารถใช้ Vue ใน React ได้<br>
3 ประเด็นหลักๆ คือ<br>
- ใช้ระบบ reactivity ของ Vue คอยสังเกตการณ์และทำงานร่วมกับ React component
- ใช้ react-vue-loader เพื่อรันคอมโพเนนต์ Vue ในแอ็พพลิเคชัน React
- ใช้ react-vue-native-script เพื่อเรียกใช้คอมโพเนนต์ Vue ใน React Native

## สารบัญ
- [บทที่ 1 Reactivity System](#reactivity-system)


#### Reactivity-System
   ด้วยการออกแบบตามลำดับชั้นที่ชัดเจนของ Vue เราจึงสามารถดึง reactivity (ขนาด 9 กิโลไบต์ gzipped) ออกมา และนำเสนอการแสดงองค์ประกอบบน React<br>

**การติดตั้ง**
ติดตั้งด้วย npm พิมพ์คำสั่ง `npm i --save react-vue`<br>
หรือ<br>
ติดตั้งด้วย yarn พิมพ์คำสั่ง `yarn add react-vue`