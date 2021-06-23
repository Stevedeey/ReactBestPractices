
import './App.css';
import ContactCard from './ContactCard'

function App() {
  return (
    <div>
      <ContactCard
        contact={{
          name: "Tosin",
          imageUrl:
            "https://media-exp1.licdn.com/dms/image/C4D03AQHo7SLy-woQtA/profile-displayphoto-shrink_800_800/0/1616412176422?e=1629936000&v=beta&t=4H7aeqhkTTr-OhBBJXzQjL5AOvFGy9aOemi5oDqixew",
          phone: "07030490674",
          email: "stvolutosin69@gmail.com",
        }}
      />
      <ContactCard
        contact={{
          name: "Seun Olaleye",
          imageUrl:
            "https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-9/189112713_3684018358375134_570544420193650563_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFGpWxdBETYwWBMnY4RV0yqim9UkZ4FR7-Kb1SRngVHv_-KaDUf6HLk0Nr9ddUjHrg&_nc_ohc=x6CWFmt9DRkAX_2OzQY&tn=3MuNzxVt6DKsnbwL&_nc_ht=scontent-los2-1.xx&oh=8810aaa6c4cf7e62950da40fd64939e7&oe=60D58CDB",
          phone: "07063749001",
          email: "seun@gmail.com",
        }}
      />
      <ContactCard
        contact={{
          name: "Omotoso Olaleye",
          imageUrl:
            "https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-9/160537795_3849550105122515_902823392031930016_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeG92_HiCSbtEHAo3MAuFtGLlnA_epaFXKCWcD96loVcoG2qdmfGIZ8rx2OCLjAWRo0&_nc_ohc=YMeXfMwc9xoAX-SapQm&_nc_ht=scontent-los2-1.xx&oh=92daf7c57812838b8bfc934e76e5adc9&oe=60D5892B",
          phone: "07063749001",
          email: "toso@gmail.com",
        }}
      />

      <ContactCard
        contact={{
          name: "Ifeoluwa",
          imageUrl:
            "https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-9/191035843_1164492520692009_482232674477371070_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeG41cYZhgmh28wTA4hN25VLy-1Xxo9bRfrL7VfGj1tF-vviS6yP1a1ZKU8qOl74i_4&_nc_ohc=L_nuYZiorjwAX8vkZVs&_nc_ht=scontent-los2-1.xx&oh=b4d413dd9b01579187236fe6b17d34b9&oe=60D57DD8",
          phone: "07063749001",
          email: "ife@gmail.com",
        }}
      />
    </div>
  );
}

export default App;
