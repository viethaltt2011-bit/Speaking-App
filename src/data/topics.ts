import { Topic } from '../types';

export const topics: Topic[] = [
  {
    id: '01',
    title: 'Study',
    qas: [
      {
        id: 'q1',
        question: 'Are you a student or are you working?',
        answer: "I'm currently a senior at Hanoi University, which is one of the top schools in the nation. Admission is incredibly competitive so I'm very proud of being a student here.",
      },
      {
        id: 'q2',
        question: 'What are you studying?',
        answer: "Well, I'm majoring in Accountancy, so as you can guess, I deal a lot with numbers and figures day in, day out. It can be overwhelming at times, but I'd like to think that I have a knack for mathematics and calculations so it's okay.",
        quote: 'I have a knack for mathematics and calculations.',
      },
      {
        id: 'q3',
        question: "What's the most difficult part of your study?",
        answer: "Well, for the most part, I'd say it's the workload. I mean there are so many assignments and students are always under a lot of pressure from deadlines. But on the other hand, exams are a piece of cake. They are quite predictable, and I can breeze through them with a bit of revision.",
      },
      {
        id: 'q4',
        question: 'What do you like most about your school?',
        answer: "I guess the aspect I find most enjoyable is the environment. I mean, I get to study in English-speaking classrooms and the facilities are top-notch; I mean, all the classrooms are air-conditioned and equipped with projectors. My friends and teachers are all very nice as well, so all in all it's a great place to study.",
        quote: 'the facilities are top-notch.',
      },
    ],
    vocab: [
      { word: 'senior (n)', meaning: 'sinh viên năm cuối' },
      { word: 'admission is ... competitive', meaning: 'đầu vào rất khó/ cạnh tranh' },
      { word: 'I major in (v)', meaning: 'tôi học ngành gì' },
      { word: 'day in, day out (idiom)', meaning: 'ngày qua ngày' },
      { word: 'overwhelming', meaning: 'quá sức' },
      { word: 'have a knack for (idiom)', meaning: 'có năng khiếu' },
      { word: 'a piece of cake (n)', meaning: 'dễ như ăn bánh' },
      { word: 'breeze through sth (idiom)', meaning: 'vượt qua cái gì dễ dàng' },
      { word: 'English - speaking classrooms (n)', meaning: 'lớp học nói tiếng Anh' },
      { word: 'top-notch (idiom)', meaning: 'tuyệt vời, đỉnh' },
    ],
    proTips: [
      'Luôn luôn giải thích kỹ những gì mình nói - việc này vừa giúp bạn nói dài câu trả lời, vừa cho bạn cơ hội "phô" thêm từ vựng. Ví dụ: top school -> competitive admission + very proud, accountancy -> deal with numbers -> overwhelming, workload -> many assignments -> pressure.',
    ],
  },
  {
    id: '02',
    title: 'Work',
    qas: [
      {
        id: 'q1',
        question: 'Are you a student or are you working?',
        answer: "Well, for the past couple of years, I've been working as an auditor at KMPG, which is among the top 4 auditing firms in Vietnam. I love my job, and I think it's a very interesting line of work.",
        quote: 'I love my job, and I think it\'s a very interesting line of work.',
      },
      {
        id: 'q2',
        question: 'What do you like about your job?',
        answer: "Well I guess the thing I like most about my job is the salary. I make what I'd consider is a lucrative income, which means not only is it enough to cover my bills, but there's also some extra to spend on whatever I want. So on payday, I often treat myself to a meal at a high-end restaurant or splurge on a nice shirt.",
      },
      {
        id: 'q3',
        question: 'What do you dislike about your job?',
        answer: "You know, I'd have to say the overwhelming workload is something I am not a fan of. I mean, I've got a very hectic schedule, which means I'm always up to my ears in deadlines. That leaves me with very little quality time for family and friends. In the future, I might look into another job that is a bit less stressful.",
      },
      {
        id: 'q4',
        question: 'What do you do after work?',
        answer: "Well, when we get off work, my colleagues and I usually hit the bar and grab a couple of drinks and maybe a bite to eat if we're feeling up to it. It's great fun, and a fantastic way to unwind.",
        quote: "I'm always up to my ears in deadlines.",
      },
    ],
    vocab: [
      { word: 'line of work (n)', meaning: 'nghề' },
      { word: 'a lucrative income (n)', meaning: 'lương lậu ngon' },
      { word: 'cover my bills (v)', meaning: 'trả tiền hoá đơn' },
      { word: 'payday (n)', meaning: 'ngày lĩnh lương' },
      { word: 'treat myself to something (v)', meaning: 'tự thưởng cho bản thân cái gì' },
      { word: 'splurge on something (v)', meaning: 'vung tiền vào cái gì' },
      { word: 'hectic schedule (n)', meaning: 'lịch làm việc dày đặc' },
      { word: 'up to my ears in (idiom)', meaning: 'bận ngập đầu' },
      { word: 'quality time (n)', meaning: 'thời gian riêng tư' },
      { word: 'hit the bar (v)', meaning: 'đi uống' },
      { word: 'a bite to eat (n)', meaning: 'đồ ăn' },
      { word: 'unwind (v)', meaning: 'thư giãn, xả stress' },
    ],
    proTips: [
      "Các bạn nên nhớ combo các từ liên quan tới nhau thay vì từ đơn lẻ để câu trả lời dài và chất hơn. Nói về tiền nong: lucrative / cover bills / payday / treat oneself / splurge on. Nói về bận rộn: hectic schedule / up to my ears. Nói về đi chơi: hit the bar / grab a drink / grab a bite / unwind.",
    ],
  },
  {
    id: '03',
    title: 'Robots',
    qas: [
      {
        id: 'q1',
        question: 'Are you interested in robots?',
        answer: 'Yes, robotics engineering is something I take a keen interest in. I actually subscribe to a journal dedicated entirely to robots called "The Robot Workshop". The other day I read a really interesting article about how robots can be used to perform surgeries.',
      },
      {
        id: 'q2',
        question: 'Do you like robots to work at your home?',
        answer: "I think that's a brilliant idea. I'm quite lazy, so household chores like cleaning or cooking are a real hassle. I would prefer to have those a robot. Actually, we have a robotic vacuum cleaner at our house. It's truly a life-saver.",
      },
      {
        id: 'q3',
        question: 'Do you want to take a car which robot is the driver?',
        answer: "Well you know nowadays self-driving cars are certainly not a strange topic anymore. A.I. has gotten more sophisticated, and it's more than capable of navigating addresses and controlling a vehicle. However, I gotta say I don't really feel comfortable letting robots take the wheel. I think they are not 100 percent reliable, and may not handle dangerous situations like a slippery road as well as a human driver does. So for now I still prefer to drive manually.",
      },
      {
        id: 'q4',
        question: 'Will robots replace human beings in the workplace completely?',
        answer: 'Well, these days human labor is being marginalized by automation in the workplace, especially in manufacturing. Labor-intensive tasks can be done by machines with ease and precision. However, there are always things that require the delicate touch of a human hand. For example, a hand-made shirt always has more soul than a machine-made one.',
      },
    ],
    vocab: [
      { word: 'robotics engineering (n)', meaning: 'công nghệ robot' },
      { word: 'subscribe to something (v)', meaning: 'đăng ký một dịch vụ nào đó' },
      { word: 'journal (n)', meaning: 'báo chuyên ngành' },
      { word: 'perform a surgery (v)', meaning: 'làm phẫu thuật' },
      { word: 'a real hassle (idiom)', meaning: 'một việc phiền phức' },
      { word: 'a life-saver (idiom)', meaning: 'một đồ vật rất hữu ích' },
      { word: 'self-driving cars (n)', meaning: 'xe tự lái' },
      { word: 'navigate (v)', meaning: 'định vị' },
      { word: 'take the wheel (v)', meaning: 'cầm lái' },
      { word: 'drive manually (v)', meaning: 'tự lái' },
      { word: 'marginalize (v)', meaning: 'làm cho kém quan trọng hơn' },
      { word: 'labor-intensive tasks (n)', meaning: 'công việc tốn sức' },
      { word: 'the delicate touch of a human hand (n)', meaning: 'sự cẩn thận của bàn tay con người' },
      { word: 'hand-made >< machine-made (adj)', meaning: 'làm bằng tay >< làm bằng máy' },
    ],
  },
  {
    id: '04',
    title: 'Celebrities',
    qas: [
      {
        id: 'q1',
        question: 'Who is your favorite celebrity in your country?',
        answer: "Well, I'd have to say I'm a big fan of Son Tung MTP, a prominent pop singer in Vietnam. His music is fantastic, and he also has a very nice personality. Even though he got a bad rap about copying other people's music, I gotta say I'm still a diehard fan.",
      },
      {
        id: 'q2',
        question: 'How do celebrities influence their fans in your country?',
        answer: "Well, for the most part, people, especially teenagers, tend to imitate their idols. I mean, they want to wear the same fashion or act in the same way as their favorite celebrities. So for example, if a celebrity endorses a certain product, it is going to sell like hot cakes.",
        quote: 'if a celebrity endorses a certain product, it is going to sell like hot cakes.',
      },
      {
        id: 'q3',
        question: 'Would you like to be a celebrity? Why?',
        answer: "Well, the idea certainly sounds tempting. Personally, I'd love to be in the limelight. I would be able to make a killing by doing shows and starring in commercials. Ever since I was a child, I've dreamt of being featured on the cover of popular magazines.",
      },
      {
        id: 'q4',
        question: 'Do you think we should protect famous people\'s privacy?',
        answer: "Definitely. As much as we love prying into other people's lives, I think we should respect celebrities' privacy. I know a few famous people get traumatized from being photographed all the time by paparazzis.",
      },
    ],
    vocab: [
      { word: 'prominent (adj)', meaning: 'nổi tiếng' },
      { word: 'a bad rap', meaning: 'tiếng xấu/ tai tiếng' },
      { word: 'diehard fan (n)', meaning: 'fan cuồng' },
      { word: 'imitate (v)', meaning: 'bắt chước, a dua' },
      { word: 'endorse (v)', meaning: 'quảng cáo cho một sản phẩm' },
      { word: 'sell like hot cakes (idiom)', meaning: 'bán chạy' },
      { word: 'in the limelight', meaning: 'được dư luận chú ý' },
      { word: 'make a killing (idiom)', meaning: 'kiếm được nhiều tiền' },
      { word: 'do shows', meaning: 'diễn show' },
      { word: 'star (in something) (v)', meaning: 'đóng, diễn xuất' },
      { word: 'be featured in/ on', meaning: 'được xuất hiện ở đâu đó' },
      { word: 'pry into (v)', meaning: 'bới móc, soi mói' },
      { word: 'traumatized', meaning: 'bị sốc tâm lý nặng' },
    ],
  },
  {
    id: '05',
    title: 'Leisure Time',
    qas: [
      {
        id: 'q1',
        question: 'Do you have any hobbies?',
        answer: "Well, everyone has their own leisure pursuits, and mine is reading. The book I'm reading at the moment is The Godfather by renowned author Mario Puzo. It's a classic, really, and I'd really recommend it.",
      },
      {
        id: 'q2',
        question: 'Is it important to have a hobby?',
        answer: "Definitely! I mean nowadays life is getting more and more hectic, so people are constantly under an enormous amount of stress. That's why it's necessary to get into some recreational activities to unwind and just forget about life for a minute, you know?",
        quote: "It's necessary to get into some recreational activities to unwind.",
      },
      {
        id: 'q3',
        question: 'Is it harmful to spend too much time on a hobby?',
        answer: "Yes, I believe spending excessive time on a hobby may have an adverse effect on people. You may end up having not enough time for your priorities like family or work. For example, it's easy for me to lose myself in books and neglect the deadlines at work.",
      },
      {
        id: 'q4',
        question: 'What free-time activities would you like to try in the future?',
        answer: "I would love to have a crack at extreme sports in the future, maybe skydiving. It looks like a blast and I think I will get a real kick out of freefalling from enormous heights.",
        quote: "I would love to have a crack at extreme sports.",
      },
    ],
    vocab: [
      { word: 'leisure pursuits = recreational activities', meaning: 'sở thích, hoạt động giải trí' },
      { word: 'a classic', meaning: 'một tác phẩm kinh điển' },
      { word: 'hectic', meaning: 'hối hả' },
      { word: 'unwind', meaning: 'thư giãn' },
      { word: 'have an adverse effect on', meaning: 'gây ảnh hưởng xấu tới ai đó' },
      { word: 'lose myself in something', meaning: 'đắm chìm vào trong cái gì đó' },
      { word: 'have a crack at', meaning: 'thử làm gì đó' },
      { word: 'a blast', meaning: 'rất vui' },
      { word: 'get a kick out of something', meaning: 'làm gì đó rất vui' },
    ],
  },
  {
    id: '06',
    title: 'Patience',
    qas: [
      {
        id: 'q1',
        question: 'What do you think "patience" is?',
        answer: "Well, I think patience is a virtue. Unfortunately, nowadays most people are quite impatient. For example, many people want to get rich quickly but are willing to get their hands dirty, so they always complain about how harsh life is.",
      },
      {
        id: 'q2',
        question: 'Do you think patience is important?',
        answer: "Absolutely. I think it's a quality that everybody should try to learn. Learning to wait until the timing is right is the key to success, in my opinion. In fact, most successful entrepreneurs are very patient people.",
        quote: "Patience is a virtue."
      },
      {
        id: 'q3',
        question: 'Do you think being patient is an important part of being polite?',
        answer: "Yes, I think patience is an indicator of politeness. I mean, a polite person would never chew someone out for keeping them waiting. If there's a good excuse for being late, a polite person should be willing to overlook such minor mistakes.",
      },
      {
        id: 'q4',
        question: 'Have you ever lost your patience?',
        answer: "Well, yeah, without a doubt, there have certainly been times when I lost my cool. For example, there was this one time when I had to wait forever to be seated at a popular restaurant. Then someone suddenly cut in line and that really ticked me off.",
        quote: "There have certainly been times when I lost my cool."
      }
    ],
    vocab: [
      { word: 'virtue (n)', meaning: 'đức tính tốt' },
      { word: 'get one\'s hands dirty (idiom)', meaning: 'lao động, làm việc nặng' },
      { word: 'quality (n)', meaning: 'phẩm chất' },
      { word: 'wait until the timing is right (v)', meaning: 'đợi tới khi thời cơ chín muồi' },
      { word: 'chew someone out (v)', meaning: 'mắng chửi ai đó' },
      { word: 'overlook (v)', meaning: 'châm chước, bỏ qua' },
      { word: 'lose my cool (v)', meaning: 'giận, mất bình tĩnh' },
      { word: 'cut in line (v)', meaning: 'chen hàng' }
    ]
  },
  {
    id: '07',
    title: 'Toy',
    qas: [
      {
        id: 'q1',
        question: 'What was your favorite toy in childhood?',
        answer: "Well, to be honest, I was kind of a spoiled kid. My parents used to pamper me with all kinds of toys, but my favorite was this Power Ranger action figure. I am a big fan of the franchise so when I got the toy, I was elated. I still have it in my living room, actually.",
        quote: "I was kind of a spoiled kid."
      },
      {
        id: 'q2',
        question: 'Should parents buy many toys for their children?',
        answer: "Mhmm, personally I don't think it's a good idea. I mean, if parents indulge their children and just buy whatever toy they like, the kids are likely to develop a habit of pestering their parents for things, and that's definitely not a good thing.",
      },
      {
        id: 'q3',
        question: 'What are the benefits of children playing toys?',
        answer: "People often think of toys as being detrimental to kids, but I think they can benefit children's development in some ways. Educational toys like building blocks can actually boost the cognitive development of small kids. For example, my brother used to play with Lego a lot when he was small, and he's a very creative person.",
      },
      {
        id: 'q4',
        question: 'What are the disadvantages of children playing toys?',
        answer: "Toys can be time-consuming. I mean, children often lose track of time when they play with toys, and as a result, they may not have enough time for other priorities such as study, for example.",
        quote: "Children often lose track of time when they play with toys."
      }
    ],
    vocab: [
      { word: 'a spoiled kid (n)', meaning: 'đứa trẻ hư, được chiều' },
      { word: 'pamper somebody with something (v)', meaning: 'chiều chuộng ai bằng cái gì' },
      { word: 'action figure (n)', meaning: 'đồ chơi hành động, đồ chơi siêu nhân' },
      { word: 'indulge (v)', meaning: 'chiều chuộng' },
      { word: 'pester (v)', meaning: 'vòi vĩnh' },
      { word: 'detrimental (adj)', meaning: 'có hại (=harmful)' },
      { word: 'boost the cognitive development', meaning: 'đẩy mạnh quá trình phát triển não' },
      { word: 'lose track of time (idiom)', meaning: 'quên hết giờ giấc' }
    ]
  },
  {
    id: '08',
    title: 'Weather',
    qas: [
      {
        id: 'q1',
        question: 'What\'s the weather like where you live?',
        answer: "Well, Vietnam is a tropical country, so it's pretty much hot and humid year round. However, in Northern cities like Hanoi, we actually enjoy four distinct seasons. So in summery months, it can get really sweltering and by contrast, temperatures can really dip in winter.",
        quote: "In summery months, it can get really sweltering."
      },
      {
        id: 'q2',
        question: 'What type of weather do you like best?',
        answer: "I'd consider myself a cold weather person. I love the crisp mornings at the end of fall and the chill of winter. Maybe it's because we have to bundle up as the weather turns cold, and I love wearing sweaters and overcoats.",
      },
      {
        id: 'q3',
        question: 'Does the weather ever affect what you do?',
        answer: "You know, I gotta say yes, especially when it rains. I mean, I cannot go out and run my errands if it's pouring outside. The roads get really slippery, so it's quite dangerous to drive. Besides, you will definitely be soaked if you do decide to go out.",
        quote: "We have to bundle up as the weather turns cold."
      }
    ],
    vocab: [
      { word: 'tropical (adj)', meaning: 'nhiệt đới' },
      { word: 'humid (adj)', meaning: 'ẩm ướt' },
      { word: 'enjoy four distinct seasons (v)', meaning: 'bốn mùa rõ rệt' },
      { word: 'sweltering (adj)', meaning: 'rất nóng' },
      { word: 'temperatures ... dip', meaning: 'nhiệt độ giảm sâu' },
      { word: 'a cold weather person', meaning: 'người thích thời tiết lạnh' },
      { word: 'crisp (adj)', meaning: 'lạnh (từ đồng nghĩa với chilly)' },
      { word: 'bundle up (v)', meaning: 'mặc nhiều quần áo' },
      { word: 'run errands (v)', meaning: 'chạy việc vặt' },
      { word: 'pour (v)', meaning: 'mưa như trút nước' },
      { word: 'slippery (adj)', meaning: 'trơn trượt' },
      { word: 'soaked (adj)', meaning: 'ướt như chuột lột' }
    ]
  },
  {
    id: '09',
    title: 'Housework',
    qas: [
      {
        id: 'q1',
        question: 'Do you do housework at home?',
        answer: "Of course! Even though traditional Vietnamese thinking dictates that women are in charge of doing chores, I try to help out around the house when I can. I'm quite clumsy, so I only do simple tasks like hanging the clothes or sweeping the floor.",
      },
      {
        id: 'q2',
        question: 'Did you do housework when you were a child?',
        answer: "Yes, I certainly did. My parents had a very hectic schedule, which means they were always up to the ears in work, so I wanted to give them a hand by taking care of some light tasks around the house like doing the dishes.",
        quote: "I wanted to give them a hand by taking care of some light tasks."
      },
      {
        id: 'q3',
        question: 'Do you think that children should do housework?',
        answer: "Absolutely. I think doing domestic tasks at an early age really benefit children's development. It kind of teaches them how to take care of themselves and live independently, which is really important if they want to live abroad. Besides, studies have shown that working with the hands do wonders for your cognitive development, so yes, I think children should do housework.",
        quote: "working with the hands do wonders for your cognitive development"
      }
    ],
    vocab: [
      { word: 'traditional Vietnamese thinking dictates that', meaning: 'suy nghĩ truyền thống VN quy định rằng' },
      { word: 'clumsy (adj)', meaning: 'vụng về' },
      { word: 'hectic schedule', meaning: 'lịch làm việc dày đặc' },
      { word: 'up to the ears (idiom)', meaning: 'bận ngập đầu' },
      { word: 'give somebody a hand (idiom)', meaning: 'giúp đỡ ai đó' },
      { word: 'light tasks (n)', meaning: 'các công việc nhẹ' },
      { word: 'domestic tasks (n)', meaning: 'việc nhà' },
      { word: 'do wonders for something', meaning: 'có tác dụng tuyệt vời cho cái gì đó' },
      { word: 'cognitive development', meaning: 'phát triển tư duy não bộ' }
    ]
  },
  {
    id: '10',
    title: 'Rain',
    qas: [
      {
        id: 'q1',
        question: 'Does it rain much in Vietnam?',
        answer: "Well, I would say precipitation in Vietnam is quite high, given the fact that it's a tropical country, unlike America, for example. When I lived there, it hardly ever rained.",
        quote: "Precipitation in Vietnam is quite high."
      },
      {
        id: 'q2',
        question: 'When does it rain most in your hometown?',
        answer: "I think the rainy season is around spring. There're intermittent showers and drizzles all day. I cannot stand it; I always get filthy whenever I go out.",
      },
      {
        id: 'q3',
        question: 'Can you remember any time when it rained particularly heavily in your hometown?',
        answer: "The first thing the springs to mind is the torrential rain in 2008. I mean, it was pouring for days, and all the roads became clogged. People had, like, a whole week off. There were always long lines of people stocking up on food and other supplies at supermarkets because there was no telling when the rain was gonna stop.",
      },
      {
        id: 'q4',
        question: 'Does rain ever affect transportation in your hometown?',
        answer: "Definitely. I mean whenever it rains, the roads would always become really congested, and gridlock is very common. It's very difficult to catch a cab. On rainy days, I usually just stay at home or walk if I have to go anywhere.",
        quote: "It was pouring for days."
      }
    ],
    vocab: [
      { word: 'precipitation (n)', meaning: 'lượng mưa' },
      { word: 'hardly ever rained', meaning: 'hầu như không mưa bao giờ' },
      { word: 'the rainy season (n)', meaning: 'mùa mưa' },
      { word: 'intermittent (adj)', meaning: 'thi thoảng, lắt nhắt' },
      { word: 'shower (n)', meaning: 'mưa rào' },
      { word: 'drizzle (n)', meaning: 'mưa phùn' },
      { word: 'filthy (adj)', meaning: 'bẩn thỉu' },
      { word: 'torrential rain (n)', meaning: 'mưa to' },
      { word: 'pour (v)', meaning: 'mưa như trút nước' },
      { word: 'clogged (adj)', meaning: 'tắc nghẽn' },
      { word: 'stock up on (v)', meaning: 'tích trữ' },
      { word: 'supplies (n)', meaning: 'đồ dùng hàng ngày' },
      { word: 'there\'s no telling', meaning: 'không có gì chắc chắn' },
      { word: 'congested (adj)', meaning: 'tắc đường' },
      { word: 'gridlock (n)', meaning: 'hiện tượng chật cứng đường' }
    ]
  },
  {
    id: '11',
    title: 'Television',
    qas: [
      {
        id: 'q1',
        question: 'Do you often watch TV?',
        answer: 'I used to be a bit of a couch potato when I was younger, but nowadays my schedule is quite packed. So, I only get to watch TV occasionally, mostly during the weekends to unwind.',
      },
      {
        id: 'q2',
        question: 'What kind of TV programs do you like?',
        answer: 'I am really into documentaries and reality shows. They are not only entertaining but also highly educational. Sometimes I binge-watch a whole series if it hooks my attention.',
        quote: 'They are not only entertaining but also highly educational.'
      }
    ],
    vocab: [
      { word: 'couch potato (n)', meaning: 'người lười biếng, hay xem TV nhiều' },
      { word: 'unwind (v)', meaning: 'thư giãn, xả hơi' },
      { word: 'binge-watch (v)', meaning: 'cày phim (xem liên tục)' }
    ]
  },
  {
    id: '12',
    title: 'Holidays',
    qas: [
      {
        id: 'q1',
        question: 'What do you do on your holidays?',
        answer: 'Well, it depends on the length of the holiday. If it is just a long weekend, I usually catch up on my sleep and hang out with friends. But for more extended breaks, I love to travel and immerse myself in new cultures.',
      },
      {
        id: 'q2',
        question: 'Do you prefer travelling alone or with friends?',
        answer: 'I prefer travelling with a group of close-knit friends. Having company means we can share the expenses and the joyful moments, making the trip much more memorable.',
        quote: 'Having company means we can share the expenses and the joyful moments.'
      }
    ],
    vocab: [
      { word: 'catch up on sleep (idiom)', meaning: 'ngủ bù' },
      { word: 'immerse oneself in (v)', meaning: 'đắm chìm vào' },
      { word: 'close-knit (adj)', meaning: 'gắn bó khăng khít' }
    ]
  },
  {
    id: '13',
    title: 'Dancing',
    qas: [
      {
        id: 'q1',
        question: 'Do you enjoy dancing?',
        answer: 'To be completely honest, I have two left feet. So I am terribly clumsy when it comes to dancing. I prefer to be a wallflower and watch others groove to the music.',
      },
      {
        id: 'q2',
        question: 'Have you ever learned to dance?',
        answer: 'Yes, when I was in high school, I took some basic waltz classes for a prom. But the steps never really clicked for me, and I eventually gave it up.',
        quote: 'To be completely honest, I have two left feet.'
      }
    ],
    vocab: [
      { word: 'have two left feet (idiom)', meaning: 'vụng về trong việc nhảy múa' },
      { word: 'clumsy (adj)', meaning: 'vụng về' },
      { word: 'a wallflower (n)', meaning: 'người nhút nhát đứng góc phòng (ở buổi tiệc)' }
    ]
  },
  {
    id: '14',
    title: 'Birthdays',
    qas: [
      {
        id: 'q1',
        question: 'How do you usually celebrate your birthday?',
        answer: 'I generally throw a small party and invite my nearest and dearest. We would grab a bite at a nice restaurant or I might rustle up something at home if I am in the mood for cooking.',
      },
      {
        id: 'q2',
        question: 'What is the most important birthday in your country?',
        answer: 'I would say the 18th birthday is a major milestone. It signifies the transition to adulthood, where you gain new legal rights and take on more responsibilities.',
        quote: 'It signifies the transition to adulthood.'
      }
    ],
    vocab: [
      { word: 'nearest and dearest (n)', meaning: 'những người thân thiết nhất' },
      { word: 'rustle up (v)', meaning: 'làm nhanh một món ăn' },
      { word: 'milestone (n)', meaning: 'cột mốc quan trọng' }
    ]
  },
  {
    id: '15',
    title: 'Mirror',
    qas: [
      {
        id: 'q1',
        question: 'Do you often look in the mirror?',
        answer: 'Yes, I do. Before heading out, I always steal a glance in the mirror just to make sure I look presentable and my hair is not a mess. It boosts my self-confidence.',
      },
      {
        id: 'q2',
        question: 'Would you ever buy a mirror?',
        answer: 'Definitely. Mirrors are not just for personal grooming; they can actually make a room look much more spacious and brighter. So, I would buy one as an interior decor piece.',
        quote: 'Before heading out, I always steal a glance in the mirror.'
      }
    ],
    vocab: [
      { word: 'steal a glance (v)', meaning: 'liếc nhìn nhanh' },
      { word: 'presentable (adj)', meaning: 'chỉnh tề, dễ nhìn' },
      { word: 'grooming (n)', meaning: 'chải chuốt, làm đẹp' }
    ]
  },
  {
    id: '16',
    title: 'Food',
    qas: [
      {
        id: 'q1',
        question: 'What is your favorite food?',
        answer: 'I am a huge fan of Vietnamese cuisine, especially Pho. The broth is rich and flavorful, and it never fails to hit the spot, particularly on a chilly morning.',
      },
      {
        id: 'q2',
        question: 'Do you like trying new food?',
        answer: 'Yes, I am quite adventurous when it comes to food. Trying exotic local dishes is always a highlight whenever I travel to a new destination.',
        quote: 'It never fails to hit the spot.'
      }
    ],
    vocab: [
      { word: 'flavorful (adj)', meaning: 'đậm đà hương vị' },
      { word: 'hit the spot (idiom)', meaning: 'gãi đúng chỗ ngứa/thỏa mãn cơn thèm' },
      { word: 'adventurous (adj)', meaning: 'thích phiêu lưu, khám phá' },
      { word: 'exotic (adj)', meaning: 'kỳ lạ, ngoại lai' }
    ]
  },
  {
    id: '17',
    title: 'Indoor Games',
    qas: [
      {
        id: 'q1',
        question: 'Do you play any indoor games?',
        answer: 'I am not heavily into gaming, but I do enjoy a good game of chess or some board games with friends. It serves as a great bonding activity and stimulates strategic thinking.',
      },
      {
        id: 'q2',
        question: 'What indoor games did you play as a child?',
        answer: 'When I was younger, I used to play hide-and-seek and building blocks. As time went on, I transitioned to playing more video games on consoles.',
        quote: 'It serves as a great bonding activity.'
      }
    ],
    vocab: [
      { word: 'bonding activity (n)', meaning: 'hoạt động gắn kết' },
      { word: 'stimulate (v)', meaning: 'kích thích' },
      { word: 'strategic thinking (n)', meaning: 'tư duy chiến lược' }
    ]
  },
  {
    id: '18',
    title: 'Plans & Goals',
    qas: [
      {
        id: 'q1',
        question: 'Do you make plans every day?',
        answer: 'Yes, I am a meticulous planner. I usually jot down my to-do list the night before. This habit helps me stay on track and ensures that nothing slips through the cracks.',
      },
      {
        id: 'q2',
        question: 'What is your goal for the next year?',
        answer: 'Broadly speaking, I want to step out of my comfort zone and further my career by acquiring a new skill, such as programming. I believe continuous learning is key to staying relevant.',
        quote: 'This habit helps me stay on track.'
      }
    ],
    vocab: [
      { word: 'meticulous (adj)', meaning: 'tỉ mỉ, kỹ càng' },
      { word: 'jot down (v)', meaning: 'ghi chú nhanh' },
      { word: 'slip through the cracks (idiom)', meaning: 'bị bỏ sót, lãng quên' },
      { word: 'step out of my comfort zone', meaning: 'bước ra khỏi vùng an toàn' }
    ]
  },
  {
    id: '19',
    title: 'Swimming',
    qas: [
      {
        id: 'q1',
        question: 'Can you swim?',
        answer: 'Yes, I can. I picked it up when I was around 10. Now, I consider myself a fairly proficient swimmer, though I only do it recreationally rather than competitively.',
      },
      {
        id: 'q2',
        question: 'Are there many places to swim near you?',
        answer: 'Fortunately, there are plenty. My neighborhood is well-equipped with several public pools and an indoor sports complex. Plus, the beach is just a short drive away.',
        quote: 'I consider myself a fairly proficient swimmer.'
      }
    ],
    vocab: [
      { word: 'proficient (adj)', meaning: 'thành thạo' },
      { word: 'recreationally (adv)', meaning: 'với mục đích giải trí' },
      { word: 'well-equipped (adj)', meaning: 'được trang bị tốt' }
    ]
  },
  {
    id: '20',
    title: 'Marriage',
    qas: [
      {
        id: 'q1',
        question: 'What is the perfect age to get married?',
        answer: 'I do not believe there is a set-in-stone age for marriage. It really comes down to maturity and financial stability. People should tie the knot only when they feel truly ready.',
      },
      {
        id: 'q2',
        question: 'Do you want to have a big wedding?',
        answer: 'Not really. I lean towards a more intimate ceremony with just family and close friends. Massive, lavish weddings can be overwhelming and unnecessarily costly.',
        quote: 'It really comes down to maturity and financial stability.'
      }
    ],
    vocab: [
      { word: 'set-in-stone (idiom)', meaning: 'cố định, không thể thay đổi' },
      { word: 'tie the knot (idiom)', meaning: 'kết hôn' },
      { word: 'intimate (adj)', meaning: 'gần gũi, ấm áp' },
      { word: 'lavish (adj)', meaning: 'xa hoa, lãng phí' }
    ]
  },
  // Scaffold remaining 20 topics
  {
    id: '21',
    title: 'Music',
    qas: [
      {
        id: 'q1',
        question: 'What kind of music do you like?',
        answer: 'I am really into pop and R&B. The catchy melodies and relatable lyrics always help me unwind after a long day. Occasionally, I listen to classical music when I need to concentrate on my work.',
      },
      {
        id: 'q2',
        question: 'Do you play any musical instruments?',
        answer: 'Unfortunately, I don\'t. I have always wanted to learn the guitar, but I never seem to find the time. Perhaps I will take it up as a new hobby in the near future.',
        quote: 'The catchy melodies always help me unwind after a long day.'
      }
    ],
    vocab: [
      { word: 'catchy melodies (n)', meaning: 'những giai điệu bắt tai' },
      { word: 'relatable (adj)', meaning: 'dễ đồng cảm' },
      { word: 'take something up (v)', meaning: 'bắt đầu một sở thích mới' }
    ]
  },
  {
    id: '22',
    title: 'Watches',
    qas: [
      {
        id: 'q1',
        question: 'Do you often wear a watch?',
        answer: 'Yes, absolutely. I feel a bit naked without my watch. It is not just about keeping track of time; to me, a watch is a stylish accessory that completes an outfit.',
      },
      {
        id: 'q2',
        question: 'What was your first watch like?',
        answer: 'If my memory serves me right, it was a simple digital watch with a plastic strap. My parents gave it to me when I was in primary school to help me learn punctuality.',
        quote: 'A watch is a stylish accessory that completes an outfit.'
      }
    ],
    vocab: [
      { word: 'keep track of time (idiom)', meaning: 'theo dõi thời gian' },
      { word: 'accessory (n)', meaning: 'phụ kiện' },
      { word: 'punctuality (n)', meaning: 'sự đúng giờ' }
    ]
  },
  {
    id: '23',
    title: 'Bags',
    qas: [
      {
        id: 'q1',
        question: 'Do you like bags?',
        answer: 'I would not say I am obsessed with them, but I do appreciate a good, sturdy bag. I usually carry a backpack because it is incredibly practical and spacious enough to hold my laptop and essentials.',
      },
      {
        id: 'q2',
        question: 'What factors do you consider when buying a bag?',
        answer: 'Durability and utility are my top priorities. I tend to go for versatile designs in neutral colors so that they can easily match our everyday outfits.',
        quote: 'I usually carry a backpack because it is incredibly practical.'
      }
    ],
    vocab: [
      { word: 'obsessed with (adj)', meaning: 'bị ám ảnh, cực kỳ thích' },
      { word: 'sturdy (adj)', meaning: 'cứng cáp, bền chắc' },
      { word: 'versatile (adj)', meaning: 'đa năng, linh hoạt' }
    ]
  },
  {
    id: '24',
    title: 'Sunshine',
    qas: [
      {
        id: 'q1',
        question: 'Do you like sunshine?',
        answer: 'I absolutely love sunny days. The bright weather instantly lifts my spirits and puts me in a good mood. Plus, getting some sunlight is a great way to boost Vitamin D levels.',
      },
      {
        id: 'q2',
        question: 'What do you do on sunny days?',
        answer: 'When the weather is glorious, I seize the opportunity to be outdoors. I might go for a jog in the park, have a picnic with friends, or just grab an iced coffee at an outdoor cafe.',
        quote: 'The bright weather instantly lifts my spirits.'
      }
    ],
    vocab: [
      { word: 'lift one\'s spirits (idiom)', meaning: 'làm ai đó vui lên' },
      { word: 'glorious (adj)', meaning: 'tuyệt đẹp, rực rỡ' },
      { word: 'seize the opportunity (idiom)', meaning: 'nắm bắt cơ hội' }
    ]
  },
  {
    id: '25',
    title: 'Fashion',
    qas: [
      {
        id: 'q1',
        question: 'Are you interested in fashion?',
        answer: 'I wouldn\'t call myself a trendsetter, but I do like to dress neatly. I usually opt for casual and comfortable clothes rather than chasing the latest fashion fads.',
      },
      {
        id: 'q2',
        question: 'What kind of clothes do you usually wear?',
        answer: 'My go-to outfit usually consists of a plain T-shirt and a pair of well-fitted jeans. It is a timeless combo that is both comfortable and versatile for various occasions.',
        quote: 'I wouldn\'t call myself a trendsetter, but I do like to dress neatly.'
      }
    ],
    vocab: [
      { word: 'trendsetter (n)', meaning: 'người dẫn đầu xu hướng' },
      { word: 'fashion fad (n)', meaning: 'trào lưu thời trang nhất thời' },
      { word: 'go-to outfit (n)', meaning: 'trang phục thường mặc, tiện lợi nhất' }
    ]
  },
  {
    id: '26',
    title: 'Places Near Water',
    qas: [
      {
        id: 'q1',
        question: 'Do you like places near water?',
        answer: 'Yes, very much so. There is something incredibly soothing about the sound of crashing waves or a flowing stream. It is my favorite way to escape the hustle and bustle of city life.',
      },
      {
        id: 'q2',
        question: 'What activities do you do near water?',
        answer: 'If I am at the beach, I love taking a stroll along the shoreline or just sunbathing. Occasionally, I might rent a kayak if I am feeling energetic.',
        quote: 'It is my favorite way to escape the hustle and bustle of city life.'
      }
    ],
    vocab: [
      { word: 'soothing (adj)', meaning: 'êm dịu, dễ chịu' },
      { word: 'crashing waves (n)', meaning: 'sóng vỗ' },
      { word: 'hustle and bustle (idiom)', meaning: 'sự hối hả và nhộn nhịp' }
    ]
  },
  {
    id: '27',
    title: 'Visitors',
    qas: [
      {
        id: 'q1',
        question: 'Do you often invite friends to visit your home?',
        answer: 'Yes, quite often. I love hosting small get-togethers at my place. We usually order some takeout, watch a movie, or just chat the night away. It is much cozier than wandering around outside.',
      },
      {
        id: 'q2',
        question: 'Do you prefer to visit someone\'s home or have them visit yours?',
        answer: 'I am actually fine with both. Visiting someone else is nice because you get a change of scenery, but hosting gives me the freedom to set the mood and prepare my favorite snacks.',
        quote: 'I love hosting small get-togethers at my place.'
      }
    ],
    vocab: [
      { word: 'get-together (n)', meaning: 'buổi tụ tập nhỏ' },
      { word: 'takeout (n)', meaning: 'đồ ăn mang về' },
      { word: 'change of scenery (n)', meaning: 'thay đổi không khí, cảnh quan' }
    ]
  },
  {
    id: '28',
    title: 'Sports',
    qas: [
      {
        id: 'q1',
        question: 'Do you like playing sports?',
        answer: 'To be honest, I am not much of an athlete, but I do try to stay active. I occasionally play badminton with my friends. It is a fantastic way to break a sweat and let off some steam.',
      },
      {
        id: 'q2',
        question: 'What is the most popular sport in your country?',
        answer: 'Without a doubt, it is football. The whole nation seems to go crazy whenever our national team competes. Millions of people hit the streets to celebrate big victories.',
        quote: 'It is a fantastic way to break a sweat and let off some steam.'
      }
    ],
    vocab: [
      { word: 'athlete (n)', meaning: 'vận động viên, người đam mê thể thao' },
      { word: 'break a sweat (idiom)', meaning: 'toát mồ hôi, tập luyện cường độ cao' },
      { word: 'let off some steam (idiom)', meaning: 'xả hơi, giải tỏa căng thẳng' }
    ]
  },
  {
    id: '29',
    title: 'Colours',
    qas: [
      {
        id: 'q1',
        question: 'What is your favorite color?',
        answer: 'I am naturally drawn to shades of blue. It signifies peace and tranquility to me. Besides, navy blue is a very versatile color that goes well with almost anything in my wardrobe.',
      },
      {
        id: 'q2',
        question: 'Did you like different colors when you were a child?',
        answer: 'Yes, definitely. When I was a kid, I was obsessed with bright, vibrant colors like yellow and red. They seemed so fun and energetic back then.',
        quote: 'It signifies peace and tranquility to me.'
      }
    ],
    vocab: [
      { word: 'drawn to (v)', meaning: 'bị thu hút bởi' },
      { word: 'tranquility (n)', meaning: 'sự yên bình, tĩnh lặng' },
      { word: 'vibrant (adj)', meaning: 'rực rỡ, sống động' }
    ]
  },
  {
    id: '30',
    title: 'Bringing Things',
    qas: [
      {
        id: 'q1',
        question: 'What do you usually bring when you go out?',
        answer: 'My daily essentials are pretty standard: my phone, a wallet, and a pair of earphones. I cannot really function without my phone since it is practically my lifeline for communication and navigation.',
      },
      {
        id: 'q2',
        question: 'Did you ever forget to bring something important?',
        answer: 'Yes, plenty of times! I am somewhat forgetful. Once, I completely left my house keys inside and was locked out for hours until my roommate came back.',
        quote: 'I cannot really function without my phone since it is practically my lifeline.'
      }
    ],
    vocab: [
      { word: 'daily essentials (n)', meaning: 'vật dụng thiết yếu hàng ngày' },
      { word: 'lifeline (n)', meaning: 'vật cứu tinh, rất quan trọng' },
      { word: 'forgetful (adj)', meaning: 'hay quên, đãng trí' }
    ]
  },
  {
    id: '31',
    title: 'History',
    qas: [
      {
        id: 'q1',
        question: 'Do you like learning about history?',
        answer: 'I used to find history utterly boring in school, but as I grew older, I developed a strong fascination for it. Learning about past eras helps me understand how our modern society was shaped.',
      },
      {
        id: 'q2',
        question: 'What historical event do you find most interesting?',
        answer: 'The Industrial Revolution is definitely at the top of my list. The rapid technological advancements during that period completely transformed human life and paved the way for the modern world.',
        quote: 'Learning about past eras helps me understand how our modern society was shaped.'
      }
    ],
    vocab: [
      { word: 'utterly (adv)', meaning: 'hoàn toàn' },
      { word: 'fascination (n)', meaning: 'sự đam mê, hứng thú' },
      { word: 'pave the way for (idiom)', meaning: 'dọn đường cho, tạo cơ sở cho' }
    ]
  },
  {
    id: '32',
    title: 'Birds',
    qas: [
      {
        id: 'q1',
        question: 'Do you like birds?',
        answer: 'Yes, I find them quite fascinating. Their colorful plumage and cheerful chirping in the morning always bring a sense of serenity to my day.',
      },
      {
        id: 'q2',
        question: 'Are there many birds where you live?',
        answer: 'Unfortunately, no. I live in a concrete jungle, so aside from pigeons and the occasional sparrow, it is quite rare to spot a diverse range of bird species in my neighborhood.',
        quote: 'Their colorful plumage and cheerful chirping always bring a sense of serenity.'
      }
    ],
    vocab: [
      { word: 'plumage (n)', meaning: 'bộ lông chim' },
      { word: 'serenity (n)', meaning: 'sự thanh bình' },
      { word: 'concrete jungle (idiom)', meaning: 'rừng bê tông (chỉ khu đô thị đông đúc)' }
    ]
  },
  {
    id: '33',
    title: 'Shopping',
    qas: [
      {
        id: 'q1',
        question: 'Do you enjoy shopping?',
        answer: 'I would call myself a sensible shopper. I only hit the stores when I genuinely need something. I am not really a fan of window shopping because I find it quite exhausting.',
      },
      {
        id: 'q2',
        question: 'Do you prefer shopping online or in-store?',
        answer: 'Definitely online. It offers unparalleled convenience. I can browse through countless catalogs with just a few taps and have the goods delivered right to my doorstep.',
        quote: 'I only hit the stores when I genuinely need something.'
      }
    ],
    vocab: [
      { word: 'sensible (adj)', meaning: 'hợp lý, biết điều' },
      { word: 'window shopping (n)', meaning: 'đi ngắm đồ bày ở cửa hàng' },
      { word: 'unparalleled (adj)', meaning: 'vô song, không gì sánh kịp' }
    ]
  },
  {
    id: '34',
    title: 'Handwriting',
    qas: [
      {
        id: 'q1',
        question: 'Do you write by hand very often?',
        answer: 'Rarely, to be honest. Since almost everything is digitized nowadays, I mostly type on my laptop or tap away on my smartphone. The only time I use a pen is to sign documents.',
      },
      {
        id: 'q2',
        question: 'Is it still important to have good handwriting?',
        answer: 'I think it is losing its significance, but a legible handwriting still leaves a good impression. However, in the professional world, typing speed is arguably much more crucial.',
        quote: 'Since almost everything is digitized nowadays, I mostly type on my laptop.'
      }
    ],
    vocab: [
      { word: 'digitize (v)', meaning: 'số hóa' },
      { word: 'legible (adj)', meaning: 'dễ đọc' },
      { word: 'arguably (adv)', meaning: 'nhiều người cho rằng, có thể nói rằng' }
    ]
  },
  {
    id: '35',
    title: 'Jewellery',
    qas: [
      {
        id: 'q1',
        question: 'Do you often wear jewellery?',
        answer: 'Not on a daily basis. I feel that wearing too many accessories can be somewhat cumbersome. I usually reserve them for special occasions like weddings or formal dinners to elevate my outfit.',
      },
      {
        id: 'q2',
        question: 'What kind of jewellery do you like?',
        answer: 'I lean towards minimalist designs. A simple silver pendant or a sleek ring is enough to add a touch of elegance without being too flashy.',
        quote: 'I usually reserve them for special occasions to elevate my outfit.'
      }
    ],
    vocab: [
      { word: 'cumbersome (adj)', meaning: 'vướng víu, cồng kềnh' },
      { word: 'minimalist (adj)', meaning: 'tối giản' },
      { word: 'flashy (adj)', meaning: 'hào nhoáng, sặc sỡ' }
    ]
  },
  {
    id: '36',
    title: 'Shoes',
    qas: [
      {
        id: 'q1',
        question: 'Do you prefer comfortable shoes or fashionable ones?',
        answer: 'Comfort always wins hands down. Wearing tight, fashionable shoes gives me dreadful blisters. I would rather wear a pair of well-cushioned sneakers any day of the week.',
      },
      {
        id: 'q2',
        question: 'How often do you buy shoes?',
        answer: 'Maybe once or twice a year. I tend to invest in high-quality footwear that can withstand the test of time, so I don\'t need to replace them very frequently.',
        quote: 'Comfort always wins hands down.'
      }
    ],
    vocab: [
      { word: 'win hands down (idiom)', meaning: 'thắng dễ dàng, là lựa chọn số 1' },
      { word: 'blister (n)', meaning: 'vết phồng rộp' },
      { word: 'withstand the test of time (idiom)', meaning: 'thử thách của thời gian, bền vững' }
    ]
  },
  {
    id: '37',
    title: 'Fruits',
    qas: [
      {
        id: 'q1',
        question: 'What is your favorite fruit?',
        answer: 'I am partial to mangoes. They are incredibly sweet and juicy, especially during the summer. A chilled mango smoothie is my ultimate go-to beverage when the weather gets scorching hot.',
      },
      {
        id: 'q2',
        question: 'Is it important to eat fruit daily?',
        answer: 'Absolutely. Fruits pack a punch of essential vitamins, minerals, and dietary fibers. Incorporating them into your daily diet is crucial for maintaining a robust immune system.',
        quote: 'Fruits pack a punch of essential vitamins and minerals.'
      }
    ],
    vocab: [
      { word: 'partial to (adj)', meaning: 'thích, thiên vị' },
      { word: 'scorching hot (adj)', meaning: 'nóng như thiêu đốt' },
      { word: 'pack a punch (idiom)', meaning: 'chứa nhiều năng lượng/chất dinh dưỡng' },
      { word: 'robust (adj)', meaning: 'khỏe mạnh, cường tráng' }
    ]
  },
  {
    id: '38',
    title: 'Dreams',
    qas: [
      {
        id: 'q1',
        question: 'Do you often firmly remember your dreams?',
        answer: 'Not really. I might recall a few blurry fragments right after waking up, but they completely fade away from my memory as soon as I start my morning routine.',
      },
      {
        id: 'q2',
        question: 'Do you think dreams have special meanings?',
        answer: 'I am a bit skeptical about dream interpretation. I think they are just the subconscious mind processing the thoughts, anxieties, and events of the day rather than mystical visions of the future.',
        quote: 'They completely fade away from my memory as soon as I start my morning routine.'
      }
    ],
    vocab: [
      { word: 'blurry fragments (n)', meaning: 'những mảnh ghép mờ nhạt' },
      { word: 'skeptical (adj)', meaning: 'nghi ngờ, hoài nghi' },
      { word: 'subconscious mind (n)', meaning: 'tiềm thức' }
    ]
  },
  {
    id: '39',
    title: 'Flowers',
    qas: [
      {
        id: 'q1',
        question: 'Do you like having flowers in your house?',
        answer: 'Yes, a fresh bouquet of flowers instantly brightens up the living room and adds a touch of vitality. Plus, they give off a lovely, natural fragrance.',
      },
      {
        id: 'q2',
        question: 'When do people in your country give flowers to each other?',
        answer: 'Flowers are a universal way to convey emotions. People exchange them on almost every significant occasion, such as birthdays, anniversaries, graduations, and even as a gesture of sympathy.',
        quote: 'A fresh bouquet of flowers instantly brightens up the living room.'
      }
    ],
    vocab: [
      { word: 'bouquet (n)', meaning: 'bó hoa' },
      { word: 'vitality (n)', meaning: 'sức sống' },
      { word: 'convey (v)', meaning: 'truyền đạt' }
    ]
  },
  {
    id: '40',
    title: 'Chocolate',
    qas: [
      {
        id: 'q1',
        question: 'Do you like chocolate?',
        answer: 'I have a tremendous sweet tooth, so chocolate is my absolute weakness. I particularly favor dark chocolate because the slight bitterness balances out the sweetness perfectly.',
      },
      {
        id: 'q2',
        question: 'Is chocolate popular in your country?',
        answer: 'It is incredibly popular, especially among the younger demographic. It is deeply commercialized as an essential gift for Valentine\'s Day or as a comfort food to lift one\'s mood.',
        quote: 'I have a tremendous sweet tooth, so chocolate is my absolute weakness.'
      }
    ],
    vocab: [
      { word: 'sweet tooth (idiom)', meaning: 'người hảo ngọt' },
      { word: 'balance out (v)', meaning: 'cân bằng lại' },
      { word: 'demographic (n)', meaning: 'nhóm nhân khẩu học / đối tượng' }
    ]
  }
];
