import React, {Component} from 'react';
import {ITEMS} from '../routes';
import {View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';

export default class Start extends Component {

  state = {
    data: [
      {
        id: 1,
        title: 'How to save your family budget: short tips for all occasions',
        image: 'https://i.ibb.co/02zr5gM/1.jpg',
        discription:
            'In order not to make impulsive purchases (especially in hypermarkets, where everything contributes to this), go to the store with a list and strictly adhere to it. As soon as you run out of a certain product at home, immediately make a note on your phone or on a piece of paper attached to the refrigerator.\n' +
            '\n' +
            'Never go to the store on an empty stomach, otherwise you risk buying more.\n' +
            '\n' +
            'Take your shopping bag or grocery bag with you instead of buying a new one every time. Reasonable both from the point of view of finance and from the point of view of the environment.\n' +
            '\n' +
            'Don\'t make big purchases on payday. Psychologists have found that, having received money, a person relaxes and is inclined to spend more than necessary.\n' +
            '\n' +
            'Learn to cook yourself. Boil jam, pickle vegetables, make sauces, sculpt and freeze cutlets for future use. Fast food and convenience foods from the store will cost more and are also less useful.\n' +
            '\n' +
            'Do not cook in large portions - for a couple of days maximum. Otherwise, the dish will get bored and you will want “something tasty”. And this is an extra expense in the store.\n' +
            '\n' +
            'Try to buy clothes not in boutiques, where you also pay for the rent of retail space, but on the Internet. There is a good selection of quality clothing on AliExpress. The main thing is to read the reviews, consult the seller about the sizes.\n' +
            '\n' +
            'Join joint purchases (they are on social networks): this allows you to save a lot.\n',
      },
      {
        id: 2,
        title: 'Why saving does not deprive you of pleasure, but enriches your life',
        image: 'https://i.ibb.co/TBD3Ty1/2.jpg',
        discription:
            '*My reasons for being thrifty aren\'t all about money.\n' +
            '\n' +
            'When I embarked on the path of saving, it was associated with finances. But cutting down on spending is one of the reasons why frugality has become a part of my life.\n' +
            '\n' +
            'First, it helps me to be calm. I don\'t feel stressed about money. I\'m not worried that I don\'t have enough money for food. I enjoy finding discounts. I love this sense of peace.\n' +
            '\n' +
            'Another non-financial aspect of frugality that appeals to me is the value of routine. I used to spend a lot of time planning, I was stressed because of it, which resulted in unnecessary spending. Now there is a place for spontaneity in my life, but ordinary days are structured, and I just live them without nerves.\n' +
            '\n' +
            '*Being frugal makes me better in other aspects of life.\n' +
            '\n' +
            'A new approach to money made me reconsider my attitude to everything. Now I feel the value of all my resources in a different way: time, energy, attention. For example, I save money when I buy something I want at the maximum discount. Or I want a healthier body and spend time on diet and exercise. In each case, I am looking for effective and efficient ways to get what I want out of life.\n' +
            '\n' +
            '*Thrift allows me to be wasteful\n' +
            '\n' +
            'Saving on unimportant, I spend money on what is worth attention. For example, my hobbies are valuable to me. And I allocate money for them every month. Such selective wastefulness brings a lot of joy and pleasure.\n' +
            '\n' +
            '*I am not a supporter of total economy\n' +
            '\n' +
            'I don\'t feel the need to be frugal in every aspect of my life. Moreover, when I tried to live like this, it inevitably led to breakdowns and rash spending.\n',
      },
      {
        id: 3,
        title: 'How to save on food',
        image: 'https://i.ibb.co/683gBF9/3.png',
        discription:
            '*Make a shopping list and follow it strictly\n' +
            '\n' +
            'To do this, develop a menu for the week: breakfasts, lunches and dinners. Inspect kitchen cabinets and refrigerator and list ingredients that are missing to prepare your intended meals. Nothing extra!\n' +
            '\n' +
            '* Compare prices in different stores\n' +
            '\n' +
            'Buying everything in one supermarket is convenient. But sometimes, if you walk to the bakery around the corner, you can get more delicious and cheaper bread.\n' +
            'If you don\'t have time for monitoring, try to shop once a week. “Today I’ll buy cottage cheese, and tomorrow I’ll come in and buy eggs” is an approach that leads to unplanned spending.\n' +
            '\n' +
            '*Attend agricultural fairs\n' +
            '\n' +
            'They usually take place in autumn and spring, and there you can very profitably buy farm products: potatoes, eggs and others.\n' +
            '\n' +
            '*Use discount cards\n' +
            '\n' +
            'You may have to pay for its purchase, but this is a one-time expense, and discounts can be used every time you visit this store.\n',
      },
      {
        id: 4,
        title: 'Why saving is bad, but spending is good',
        image: 'https://i.ibb.co/QmfnG0p/4.jpg',
        discription:
            '*Savings make you all the juice\n' +
            '\n' +
            'The more money you try to save, the more you begin to deny yourself. Why do I need new shoes, if the old ones can be patched up, why buy expensive food, if you can buy canned food, why go to the doctor if everything goes away by itself?\n' +
            '\n' +
            'A series of such questions can lead you to the most unpleasant consequences. Cheap shoes will fall apart several times faster than quality shoes, and in the end, such savings will cost an exorbitant price. Food of questionable composition will undermine health. And there is nothing to say about canceling a visit to a doctor: a disease that is not cured in time will hit not only the body, but also the wallet. Moreover, mercilessly\n' +
            '\n' +
            '*Savings keep you from growing\n' +
            '\n' +
            'So, imagine you decided to buy a computer. For a thousand dollars. The plan is to save $ 100 every month, and in 10 months you will have the required amount. It remains only to wait a little and stop going to the gym, so as not to spend too much, and to the movies. After 10 months, you buy a new computer, and then you light up your phone, your smartwatch - and it never ends.\n' +
            '\n' +
            'All this endless saving ultimately kills the motivation to grow both professionally and personally. Here it would be to pay off debts or save up for new shoes, what kind of development.\n' +
            '\n' +
            '*Spending is an incentive\n' +
            '\n' +
            'There is a second option - to increase cash flows. If you say to yourself “damn it, I can afford it” and each time you raise and raise the bar, you have no choice but to earn more.\n' +
            '\n' +
            'This allows you to reach new heights, develop in your career, and meet new people. Gain confidence that literally everything is within your power and that you can not be afraid of poverty.\n',
      },
      {
        id: 5,
        title: 'How to save on food without compromising quality',
        image: 'https://i.ibb.co/FK7YYV0/5.png',
        discription:
            '* Prepare seasonal ingredients\n' +
            '\n' +
            'This means that if tomatoes and cucumbers do not grow in your area in winter, then ... exclude them from the diet for this time of year altogether or reduce to a minimum. Replace them with canned ones (preferably those made by your grandmother or yourself). And even better - for root crops and cabbage of all varieties. Instead of arugula salads and other fresh herbs in the off-season, prepare cabbage and beetroot salads. Lean on the cabbage soup until you winter. Such food will cost you significantly less. And you will also avoid unnecessary substances from overseas sprayed vegetables.\n' +
            '\n' +
            '* Say no to semi-finished products\n' +
            '\n' +
            'It just seems that the dumplings are not that expensive. Good dumplings are often more expensive than meat. And the bad ones ... why do you need them at all? If you buy meat yourself and spend a wonderful evening with your children making dumplings for a month in advance, then it will cost you much less. They will also taste better.\n' +
            '\n' +
            '*Cook for two days\n' +
            '\n' +
            'As mentioned above, this will save you time. Plus, oddly enough, it will cut down on food costs. The secret is that there will be less leftovers.\n' +
            '\n' +
            'If you have a very large family and everything is eaten at once, then from the possible leftovers you can make a great lunch the next day for someone from your family.\n' +
            '\n' +
            '*Make a menu for the week\n' +
            '\n' +
            'Nothing saves you money, time, and hassle like putting together a weekly menu. To the question of the family "What do we have for dinner?" you will always have an answer. And you yourself do not need to suffer every day over this issue.\n',
      },
      {
        id: 6,
        title: 'How to save on gasoline and car maintenance',
        image: 'https://i.ibb.co/tMBrjTd/6.jpg',
        discription:
            '*Drive right\n' +
            '\n' +
            'Avoid traffic jams\n' +
            '\n' +
            'Let\'s start with driving. As trite as it may sound, you should clearly plan your route before you hit the road. This will save you from winding circles in the city and standing in traffic jams with the engine running, which will turn into wasted fuel. Average fuel consumption at idle speed is usually between 1 and 1.5 liters per hour, depending on engine size. That is why you should also not get carried away with a long warm-up - modern motors only need a couple of minutes of work before starting to move.\n' +
            '\n' +
            '*Refuel at night\n' +
            '\n' +
            'Oddly enough, the correct filling of the car will help save on fuel. Experienced drivers prefer to visit gas stations in the early morning or late evening when it\'s cool outside. Fuel density depends on temperature. The higher it is, the less volume will enter the tank.\n' +
            '\n' +
            '*Fill tank full\n' +
            '\n' +
            'Try not to fill up 5-10 liters, but always fill the tank full, so as not to go to the gas station in a few days, burning precious fuel. But the choice of a brand of gasoline should not be approached with fanaticism - be guided by the manufacturer\'s recommendations and do not chase the most premium and expensive fuel.\n' +
            '\n' +
            '*Change consumables and check wheels in time\n' +
            '\n' +
            'Particular attention should be paid to the air filter, the condition of which affects fuel consumption. Check the camber setting and maintain the correct tire pressure - both moments increase resistance when driving, and with it, consumption\n' +
            '\n' +
            '*Insulate the engine\n' +
            '\n' +
            'In winter, a lot of fuel is spent on warming up the engine, so it makes sense to take care of its insulation with a special blanket. This will speed up the heating of the engine and allow it to cool down longer, which will have a positive effect on fuel consumption.\n',
      },
      {
        id: 7,
        title: 'How to save every day',
        image: 'https://i.ibb.co/NxZqB1N/7.jpg',
        discription:
            '*Observe the 48 hour rule\n' +
            '\n' +
            'Most of us spend on impulse purchases. We often stumble upon some kind of cool thing in a showcase in a shopping center, or in Chinese online stores, or somewhere else. And the sales on Steam, when we buy games that we then launch only a couple of times ... This is a real black hole where money flows.\n' +
            '\n' +
            '*Buy clothes online\n' +
            '\n' +
            'It is cheaper to buy things on the Internet than in regular stores. So feel free to shop there. Of course, trying on clothes on yourself is much easier than figuring out the sizes on the page of an online store. But, knowing some simple tricks, you can dress on the Internet in such a way that even for a fashion week.\n' +
            '\n' +
            '*Do not link your card to online stores and services\n' +
            '\n' +
            'Online shopping has a drawback: the speed and simplicity of online orders pushes us to make more and more purchases, even if they are not really needed.\n' +
            'Jennifer McDermott, consumer protection specialist at Finder, advises 12 clever ways to save money every day, according to financial experts, not to link your payment cards to accounts in online stores and other services.\n' +
            '\n' +
            '*Disable subscriptions to unused services\n' +
            '\n' +
            'There are a bunch of services on the Internet that work with a paid subscription. This includes Apple Music with Google Play Music, and PlayStation Plus, and storage facilities like Dropbox, and note-taking tools like Evernote and Bear. When you have a lot of subscriptions, money starts to simply flow away like sand through your fingers.\n' +
            '\n' +
            '*Train at home\n' +
            '\n' +
            'Paying for a gym membership and a coach is not cheap. Of course, it is easier to study under the supervision of a professional who will guide you and, if necessary, cheer you up with a motivating kick. But with the proper level of discipline, you can keep fit at home. There are many sets of exercises for this.\n',
      },
      {
        id: 8,
        title: '5 strategies to save money',
        image: 'https://i.ibb.co/sKRRZQN/8.png',
        discription:
            '*Controlling emotions\n' +
            '\n' +
            'The psychological state of a person strongly affects his attitude towards money. Uncontrolled emotions often lead to irrational spending.\n' +
            '\n' +
            'For example, many see money as a universal antidepressant. Everyone got me - I\'m going to buy another unnecessary rubbish. According to psychologists, this behavior is an attempt to prove to the offenders their superiority ("I am better because I can afford it, but they cannot"). What does this lead to? Right, to throw money down the drain.\n' +
            '\n' +
            'Therefore, one of the strategies that will help you save a lot is to control the hidden emotional factors that eat up money.\n' +
            '\n' +
            '*Refusal of unnecessary\n' +
            '\n' +
            'Check your weekly shopping list. Is everything in it vital for you? We are not talking about refusing to buy meat (because it is expensive) or buying a new iron (you can walk around in a non-ironed one).\n' +
            '\n' +
            '*The difference between price and value\n' +
            '\n' +
            'Warren Buffett is a renowned entrepreneur, the largest investor in the world, one of the richest people on the planet. His fortune is estimated at $ 66 billion.\n' +
            '\n' +
            'At the same time, Buffett is incredibly economical.\n' +
            '\n' +
            '*Family frugality\n' +
            '\n' +
            'Why are most families unable to save money? It would seem that the answer is obvious. Utilities, transport, food, household items - not all of the family\'s expenses. And also entertainment and various unplanned expenses (such as a sudden birthday invitation). But often the reason is not that there is nothing to save from, but that the spouses do not know how to save.\n' +
            '\n' +
            '*Smart shopping\n' +
            '\n' +
            'You can significantly save on payment for goods and services if you make purchases prudently. For example, you shouldn\'t chase brands. First, a big name and a high price tag do not always indicate quality. Second, unadvertised counterparts are often just as good.',
      },
    ]
  };

  constructor(props) {
    super(props);
  }

  render() {
    const resizeMode = 'cover';
    return (
        <View style={{
          flex: 1
        }}>
          <View style={styles.wrap}>
            <Image
                style={{
                  flex: 1,
                  resizeMode,
                }}
                source={{ uri: "https://i.ibb.co/fXXK3Rv/photo-2020-07-30-19-02-48.jpg" }}
            />
          </View>

          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: 'https://i.ibb.co/xG1HrcJ/logo.png'
                  }}
              />
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                  style={styles.btn}
                  onPress={() => this.props.navigation.navigate(ITEMS, this.state)}
              >
                <Text style={styles.btnText}> START </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>


    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  container: {
    display: 'flex',
    flexDirection:'column',
    flexWrap:'wrap',
    justifyContent: 'space-between',
    flex: 1
  },
  logoContainer: {
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'white'
  },
  tinyLogo: {
    width: 200,
    height: 40
  },
  btnContainer: {
    width: "100%",
    paddingBottom: 20,
    paddingRight: 10,
    paddingLeft: 10
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#cbd633',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 40,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold'
  }
});
