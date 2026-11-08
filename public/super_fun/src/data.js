var carTypes = {
	'adventurer': {
		title: 'Early adventurer',
		balance: 80000,
		age: 45,
		carWidth: 91,
		carHeight: 53
	},
	'sitter': {
		title: 'Super Sitter',
		balance: 120000,
		age: 55,
		carWidth: 75,
		carHeight: 42
	},
	'work-horse': {
		title: 'Work horse',
		balance: 160000,
		age: 60,
		carWidth: 103,
		carHeight: 52
	}
}

var lifestyles = [{
	over: 0,
	title: 'Modest',
	story: 'Campervan, baked beans and trips to the Big Banana etc.'
},{
	over: 350000,
	title: 'Comfortable',
	story: 'A room with a view, Roast with all the trimmings, snorkelling in the Whitsundays etc.'
},{
	over: 650000,
	title: 'Self funded',
	story: 'Plush penthouses, fine dining and extravagant European holidays etc.'
}]

var links = [{
	title: 'Salary Sacrifice',
	url: 'http://www.twusuper.com.au/About-super/Salary-sacrifice.aspx'
},{
	title: 'Co-contribution',
	url: 'http://www.twusuper.com.au/About-super/Government-co-contributions.aspx'
},{
	title: 'Add to your super',
	url: 'http://www.twusuper.com.au/You-and-your-super/Add-to-your-super.aspx'
},{
	title: 'Find lost super',
	url: 'http://www.hardworkingsuper.com.au/About-super/tracking-down-lost-super.aspx'
},{
	title: 'Roll your super together',
	url: 'http://www.twusuper.com.au/You-and-your-super/Rollover-and-save.aspx'
},{
	title: 'Beware of scams',
	url: 'http://www.twusuper.com.au/about-super/super-scams.aspx'
},{
	title: 'Transition to retirement',
	url: 'http://www.twusuper.com.au/transpension/transition-to-retirement-pension.aspx'
},{
	title: 'Insurance to suit you',
	url: 'http://www.twusuper.com.au/Forms/FS-Insurance-JULY-2011.aspx'
},{
	title: 'Preparing for retirement',
	url: 'http://www.twusuper.com.au/Forms/FS-Retirement-Oct-2010.aspx'
},{
	title: 'Your client relationship officer',
	url: 'http://www.twusuper.com.au/Contact-us/Client-Relations-Officers.aspx'
},{
	title: 'Super Retirement Calculator',
	url: 'http://www.twusuper.com.au/Super-Retirement-calculator/index.html'
}];

var questions = [{
	text: 'Go-kart, trampoline, 4 bikes and 11 tennis racquets! It feels great to de-clutter your life of things you no longer use. The $2,500 you made from selling your junk is a bonus! But what will you do with your money?',
	tip: "Making extra contributions to super is a great way to boost your retirement savings. The power of time and compound interest means the earlier you start, the better off you'll be.",
	answers: [{
		text: "Lottery tickets! It's all or nothing for me.",
		msg: 'Did you know that the odds of winning first division Saturday Gold Lotto in Australia are 8,145,060:1? Good luck!',
		reward: 0,
		correct: false
	},{
		text: "Spend a little on yourself and make a $2,000 personal contribution to your super. You won't miss the money now.",
		msg: "Congratulations! You just added $4,000 to your retirement benefit by selling your junk and investing wisely. Hooray for compound interest!",
		reward: 4000,
		correct: true
	},{
		text: 'New go-kart $500, new bike $500, new tennis racquet $500',
		msg: 'Well you spent all the money but at least you have space for your new purchases, right?',
		reward: 0,
		correct: false
	}]
},{
	text: "You had the opportunity to salary sacrifice before retirement to build a bigger nest egg. When did you start?",
	tip: "Ask your employer to pay extra into your super from your before-tax salary. This will reduce your gross (taxable) salary, so you'll pay less income tax.",
	answers: [{
		text: "Never. Why would I add extra money when my employer is paying it already?",
		msg: "Salary sacrificing just 2% from age 20 to 65 could give you around $242,000! Hopefully you enjoyed splashing around the money you could have saved.",
		reward: 0,
		correct: false
	},{
		text: "In my 20s once I could afford it. Sure I had to budget  but I figured it was worth it.",
		msg: "Congratulations - you gain an extra $242,000 by salary sacrificing just 2% of your salary from age 20 to age 65. When you put it like that it's worth taking your lunch from home occasionally isn't it?",
		reward: 242000,
		correct: true
	},{
		text: "In my 30's when I settled down. Two incomes made a big difference.",
		msg: "Congratulations - you gain an extra $174,000 by salary sacrificing just 2% from age 20 to 65! When you put it like that it's worth cutting back on the occasional night out isn't it?",
		reward: 174000,
		correct: true
	},{
		text: 'In my 40s. Kids are expensive!',
		msg: "Congratulations - you gain an extra $115,000 by salary sacrificing just 2% of your salary from age 0 to 65! When you put it like that it's worth cutting back on a few few take-away meals, isn't it?",
		reward: 115000,
		correct: true
	}]
},{
	text: "If you lost a large sum of money you'd probably do whatever you could to get it back, but what about lost super?",
	tip: "<b>Super search!</b> Search online at ATO's website ato.gov.au/superseeker and track down any lost super accounts you may have. It's free  - you just need your full name, date of birth and tax file number.",
	answers: [{
		text: "Quick help me find it!",
		msg: "Congratulations! You boosted your balance by $5,000!  The process was quick and easy and it didn't cost you a cent - well done!",
		reward: 5000,
		correct: true
	},{
		text: "Maybe I'll do it later.",
		msg: "Later? Come on! Lost super is a large scale problem in Australia, with a reported $10 Billion in unclaimed super. How much is yours? Search - you might be pleasantly surprised!",
		reward: 0,
		correct: false
	},{
		text: "No thanks - I bet its difficult to find.",
		msg: "Thanks to the internet, finding lost super couldn't be easier. If you know your full name, date of birth and tax file number you can use the ATO's superseeker tool right now!",
		reward: 0,
		correct: false
	}]
},{
	text: "You've learnt that there are 3 super ways to effectively use a Transition to Retirement pension (TTR) once you turn age 55. A Client Relations Officer mentions some scenarios that may be available to you. Are any of these of interest?",
	tip: "<b>Super strategy</b> Under the right circumstances a TTR allows you to salary sacrifice part of your work pay because extra income is being generated by the TTR. This provides additional tax advantages as regards the salary sacrificed income.",
	answers: [{
		text: "Work part-time and use a TTR to supplement your income.",
		msg: "Congratulations! You're working part time and you're years away from retirement age. This doesn't boost your super balance but it will certainly make your colleagues very jealous!",
		reward: 0,
		correct: true
	},{
		text: "Work full-time, but use a TTR to provide some or all of your income. You could then salary sacrifice more of your pay, providing potential tax savings.",
		msg: "Congratulations, you've boosted your super balance by $50,000. Best of all, you weren't out of pocket at all. Isn't that clever!",
		reward: 50000,
		correct: true
	},{
		text: "Combine full-time work with a TTR account and use the additional income for other investments etc.",
		msg: "Congratulations! You've made an additional $50,000 with your investments, of course you'll add it to your super, right? You always knew that Emu farm was a winner!. You can thank your TransPension TTR for giving you the capital to get started.",
		reward: 50000,
		correct: true
	},{
		text: "No thanks, not interested",
		msg: "So, the TTR isn't for everyone, but aren't you glad you did your research just to be sure? Nice work.",
		reward: 0,
		correct: true
	}]
},{
	text: "Well done on being promoted to Supervisor! There'll be extra responsibility, but you're up to the challenge.  The extra pay will be nice! What do you have planned for it?",
	tip: "Making extra contribution to your super fund can make a big difference to your  balance. Every contribution helps and the sooner they can be made, the better!",
	answers: [{
		text: "A new car, my old car is fine but it's only right that people know I'm the boss.",
		msg: "Congratulations on the purchase of your new car, but if isn't going to last until retirement it's a good idea to make sure you have enough savings to fund the lifestyle that you wish to have.",
		reward: 0,
		correct: false
	},{
		text: "1 of everything at the Apple store please. It's time I made friends with technology.",
		msg: "You'll look the part showing presentations on your iPad! Technology is lots of fun, but before blowing too much on toys it's important to make sure you've got enough invested to fund the retirement you want",
		reward: 0,
		correct: false
	},{
		text: "Salary sacrifice to super, it seems a little boring  but I've got big plans for when I finish working.",
		msg: "Congratulations, you've boosted your super by $52,000 for salary sacrificing your 3% pay rise from age 50 to 65. You deserve it!",
		reward: 52000,
		correct: true
	}]
},{
	text: "You receive the following email: Dear Winner, You have won International Email Lottery! You are selected to claim the sum of $1,100,000. Hmm, you didn't buy a lottery ticket and you had no idea that your email address bought a ticket either. What do you do?",
	tip: "It is estimated that Australians are scammed out of over a billion dollars each year - don't be a statistic! If it sounds too good to be true it probably is!",
	answers: [{
		text: "DELETE!",
		msg: "Congratulations on successfully identifying a scam. Promotion for a foreign lottery is almost always phony. There is no bonus for your super, but it's good to know that your money is safe.",
		reward: 0,
		correct: true
	},{
		text: "Give me my $1,100,000. If it's on the internet it's gotta be true!",
		msg: "Come on! No company gives millions of dollars away to email addresses. We all need to be vigilant about protecting ourselves from scams. Study up and keep your money safe.",
		reward: 0,
		correct: false
	}]
},{
	text: "Your mate Joe, has a mate, Fred. He thinks he knows a bit about retirement planning. Joe is getting financial advice from Fred in exchange for a cooked dinner -  bargain! The same deal is available to you. What do you do?",
	tip: "<b>Get super advice from the experts!</b> TWUSUPER gives all members access to affordable financial advice, when they need it. Your first session on a single super related issue is completely free of charge! It doesn't come more affordable than that!",
	answers: [{
		text: "Thank Fred for his offer but decisions about your hard earned money are better talked through with professionals",
		msg: "Congratulations! You added $25,000 to your super balance. Advice from a qualified financial planner can be extremely valuable to you as you approach retirement and need to make the most of every opportunity.",
		reward: 25000,
		correct: true
	},{
		text: "What a bargain! Is Fred free for that dinner this weekend?",
		msg: "A roast dinner seems like a very small outlay, but when you think about earnings you could miss out on as a result of financial advice from an unqualified person, the deal begins to look like the lemon that it is.",
		reward: 0,
		correct: false
	}]
},{
	text: "You've moved jobs a few times, had a career change or 3, contracted  for a while, and don't forget that fast food job you had as a student! You've got a fair chunk of forgotten super  in multiple funds, being slowly eaten away by fees. You know you should get your act together and consolidate it all. But who's got time?",
	tip: "<b>Get super together!</b> If you have lots of small accounts spread across different  funds, you might think about bringing them together into one account. You'll save money on fees and it'll be easier to keep track of your savings.",
	answers: [{
		text: "It's important - I'll make time",
		msg: "Congratulations! You just added $20,000 to your super balance by consolidating your  super accounts.  The balances weren't big and it didn't cost you anything - superb!",
		reward: 20000,
		correct: true
	},{
		text: "I probably should but I can't be bothered.",
		msg: "Someone with 4 super accounts could save as much as $540 in fees every year, simply by consolidating their accounts. Over time that can add up to some serious retirement dollars!",
		reward: 0,
		correct: false
	}]
},{
	text: "You've just received a letter from a lawyer informing you of the passing of your long, lost, Great Aunt Gladys. The old girl was looking out for you and you now stand to inherit a sum of money. What do you do?",
	tip: "You can make a personal contribution on a regular or one-off basis, in a number of ways, depending on which is easiest for you.",
	answers: [{
		text: "Spend it, when does the iPad 6 come out??",
		msg: "Wow, the iPad 6 does everything! I hope it lasts the rest of your life if you can't afford to replace it in retirement...",
		reward: 0,
		correct: false
	},{
		text: "Travel",
		msg: "Bon voyage! Enjoy every minute you're away. If you decide to wait until you have more time to enjoy your holiday (i.e. retirement) you can contribute to super to start earning interest on your investments now, and withdrawals after turning 60 are tax free. We're just saying...",
		reward: 0,
		correct: false
	},{
		text: "Contribute to super",
		msg: "Congratulations! You just added $25,000 to your super balance. A lump sum contribution to your super before age 65 combined with the power of compound interest on your investments means your retirement savings get a super boost!",
		reward: 25000,
		correct: true
	}]
},{
	text: "You've just found out that TWUSUPER offer all members access to affordable financial advice. Best of all, the first session on a single  issue is completely free of charge! You've got some questions but there's a few jobs around the house that need doing too. What do you do?",
	tip: "With good planning you can make the most out of whatever you have to work with.  Remember, no matter what your situation is now, there's time to improve your position and create a brighter future.",
	answers: [{
		text: "Make the call, you don't want to work any longer than you have to!",
		msg: "Congratulations! You added $25,000 to your super balance.  Advice from a qualified financial planner can help you put the right strategy in place as you approach retirement.",
		reward: 25000,
		correct: true
	},{
		text: "I'll call another time.",
		msg: "Yeah right! It can't hurt to call and your questions can probably be answered by a professional over the phone. What have you got to lose?",
		reward: 0,
		correct: false
	},{
		text: "I've got a mate Joe, whose has a mate Fred, who can help in exchange for a cooked dinner – bargain!",
		msg: "When you think about earnings you could miss out on as a result of financial advice from an unqualified person, the deal begins to look like the lemon that it is.",
		reward: 0,
		correct: false
	}]
},{
	text: "Got a tax return or bonus coming your way? You could throw it into your super??",
	tip: "Ask your employer to salary sacrifice your bonus payment into your super for you. As such, instead of paying your normal tax rate you'll only pay 15% contributions tax. Conditions apply.",
	answers: [{
		text: "Yes",
		msg: "Congratulations! You added $25,000 to your super. You can make a voluntary contribution any time before age 65 and the power of compound interest means your retirement savings get a super boost!",
		reward: 25000,
		correct: true
	},{
		text: "No way!",
		msg: "We all need to live a little! Just remember that keeping the same lifestyle in retirement may need some good planning and budgeting now.  Don't leave it too late!",
		reward: 0,
		correct: false
	},{
		text: "Maybe just half? I've got bills!",
		msg: "Congratulations! You just added $20,000 to your super balance. You can make a voluntary contribution to your super any time before age 65 and the power of compound interest on your investments means your retirement savings get a super boost!",
		reward: 20000,
		correct: true
	}]
},{
	text: "If you make after-tax contributions to super, you may be eligible to receive a co-contribution - yes, that's right free money from the government!",
	tip: "Free money from the government? Super! Use TWUSUPER’s Government co-contribution calculator at www.twusuper.com.au to find out how much you could receive.",
	answers: [{
		text: "Yes",
		msg: "Congratulations! You added $8,000 to your super balance. You pay plenty of tax during your working life so good for you!",
		reward: 8000,
		correct: true
	},{
		text: "No",
		msg: "Not interested in free money? Are you sure? You should read the question again.",
		reward: 0,
		correct: false
	},{
		text: "I'm ineligible :(",
		msg: "Damn! I knew it was too good to be true. Fortunately there are many other ways to boost your super balance.",
		reward: 0,
		correct: false
	}]
},{
	text: "Someone made an offer the old block of land you never got around to building on. The good news is that it went up in value and has left you with a tidy little profit. What will you do with it?",
	tip: "Making voluntary super contributions may help you secure a great financial future. Whether you have 10 years or 20 years to retirement, saving just $20 a fortnight can make a massive difference to your income in retirement. By using the magic of compounding you can maximise your returns and give your super a boost.",
	answers: [{
		text: "Spend it – new car!",
		msg: "Wow, your new car is HOT! I hope it lasts the rest of your life if you can’t afford to replace it in retirement…",
		reward: 0,
		correct: false
	},{
		text: "Holiday!",
		msg: "Have a wonderful trip! If you wait until you have more time to enjoy your holiday (i.e. retirement) you can contribute to super to start earning interest now, and withdrawals from your super after turning 60 are tax free. We’re just saying…",
		reward: 0,
		correct: false
	},{
		text: "Contribute to super",
		msg: "Congratulations! You just added $50,000 to your super balance. You can make a voluntary contribution to your super any time before age 65 and the power of compound interest on your investments means your retirement savings get a super boost!",
		reward: 50000,
		correct: true
	}]
},{
	text: "You’ve noticed the section in the PDS and on your annual member statement – you have personal insurance cover. But what exactly does it cover? Do you have enough? It might be a good idea to review your cover to ensure it meets your needs.",
	tip: "Insurance can provide financial security for you if you are unable to work due to illness or injury. Competitively priced death, total and permanent disability (TPD) and income protection insurance is available through TWUSUPER. Premiums are deducted directly from your super account. If you are a TWUSUPER member, you may have automatic insurance cover. Check your Annual Benefit Statement or login to MemberAccess to ensure you have the right cover for you.",
	answers: [{
		text: "OK I’ll do it",
		msg: "A Congratulations! You’ve added $7,000 to your super! During your insurance review you applied for voluntary income protection which was very fortunate when you were off work with a broken arm.",
		reward: 7000,
		correct: true
	},{
		text: "I’ve got some cover, that’s all I need to know",
		msg: "It’s great to have insurance but is it much use if you don’t know what it covers? Review your insurance needs every 2 or 3 years - and whena a dramatic event occurs in your life.",
		reward: 0,
		correct: false
	},{
		text: "What’s insurance?",
		msg: "Our capacity to earn is regularly at risk as we are exposed to accidents or illness. Be sure to check what cover you have now and look into what cover you think you need and talk to us about bridging any gap in cover",
		reward: 0,
		correct: false
	}]
},{
	text: "You’ve had a windfall! After you’ve treated your mates to a round and your partner to a nice meal, what do you do with the rest?",
	tip: "Why is compound interest super? Compound interest is all about earning interest on your interest! Compound interest works well in superannuation because it's a long term investment. You can't normally get your hands on your super until later in life so your super benefits from many years of compound interest.",
	answers: [{
		text: "Spend spend spend",
		msg: "Easy come easy go – enjoy the winnings while they last.",
		reward: 0,
		correct: false
	},{
		text: "Bank it",
		msg: "Doesn’t it feel great to have money in the bank?!However, if you are getting close to retirement age consider this: Moving funds from a cash investment into super may increase your Centrelink entitlements.",
		reward: 0,
		correct: false
	},{
		text: "Contribute to super",
		msg: "Congratulations! You’ve added $10,000 to your super balance! Limits apply to lump sum post tax contributions are called non-concessional contributions. Just remember that you generally can't access your super until you retire.",
		reward: 10000,
		correct: true 
	}]
},{
	text: "An important step in planning your financial future is to know your current financial position, working out what you have now, what you’re likely to have when you retire and what you think you’ll need to live the rest of your life comfortably. There are many online tools to assist with this, or you can also speak to an accountant or qualified financial planner. Does this sound worthwhile?",
	tip: "The earlier you start preparing for retirement, the more options you have to set a course that suits you.",
	answers: [{
		text: "Yes, I don’t want to be caught short",
		msg: "Congratulations, you’ve added $15,000 to your super balance, but depending on your situation this appointment could potentially be worth more. Nothing beats careful planning and good advice! Well, maybe a big lotto win…",
		reward: 15000,
		correct: true
	},{
		text: "No, numbers are boring!",
		msg: "How will you ever get to where you want to be if you don’t even know where you are now? Planning your financial future is critical to funding a comfortable retirement. Talk to us about your options.",
		reward: 0,
		correct: false
	}]
},{
	text: "You’ve seen your Client Relationship Officer around, your workplace, some industry events and they’ve helped you with a few queries. As you approach retirement you realise that your super will change again once you stop working. Is it time to talk to your Client Relationship Officer about your options?",
	tip: "Our Client Relations Officers can help you make sense of your super by answering your questions or helping you to complete forms or paperwork. Our team covers all of Australia, if they can’t get to you in person, they’ll be able to help over the phone.",
	answers: [{
		text: "Yes please – I need expert help",
		msg: "Congratulations, you added $20,000 to your super balance by taking a few simple tips from your Client Relationship Officer. That’s 20000 good reasons why your meeting was worthwhile!",
		reward: 20000,
		correct: true
	},{
		text: "Meeting with someone doesn’t sound very convenient",
		msg: "Our Client Relations Officers cover all of Australia, however if a team member can’t get to you in person, they’ll be able to talk to you over the phone. That’s super convenient!",
		reward: 0,
		correct: false
	},{
		text: "No thanks, I’ll be right",
		msg: "You’re approaching the finish line, but have you really done all you can to ensure your comfortable retirement? Don’t be lazy – find out!",
		reward: 0,
		correct: false 
	}]
},{
	text: "Retirement may be just a few years away. You know a lot of retirees rely on Centrelink for at least part of their income. It’s probably a good idea to talk to someone to see what you’re eligible for.",
	tip: "If you would like to know more about how any financial options you are considering could affect your pension, you can talk to a Centrelink FIS officer.Call the Centrelink Retirement Line on 13 2300.",
	answers: [{
		text: "Yes I’ll talk to Centrelink",
		msg: "Congratulations, you added $30,000 to your super balance! Many people in retirement live on a mix of their own savings and the government Age Pension. The rate you receive depends on the level of your income and assets.",
		reward: 30000,
		correct: true
	},{
		text: "I’ll take my chances and make an appointment when I retire",
		msg: "You may be able to structure your investments and income BEFORE YOU RETIRE to maximise your retirement income. When you start thinking about retirement be sure to make an appointment with Centrelink.",
		reward: 0,
		correct: false
	},{
		text: "I’m rolling in it. I’m far too wealthy to be entitled to any Centrelink benefits.",
		msg: "Even if you don’t qualify for the Age Pension, you may be eligible for other benefits. For example: The Commonwealth Seniors Health Card helps with the cost of prescription medicines and other health services. Seniors Card is a state government card that gives discounts on travel and some retail services.",
		reward: 0,
		correct: false 
	}]
},{
	text: "Wouldn’t it be nice to make heaps of money quickly, with very little effort, working at home in only your pajamas? You’ve been searching the net and notice an ad promising $10,000 per month. This sounds great! What do you do?",
	tip: "Falling for a get rich quick scheme is not as difficult as some people may choose to believe. The idea of accumulating instant wealth through minimal effort or investment is almost universally appealing. This natural desire for instant gratification drives the gambling industry, and a typical get rich quick scheme can be viewed as another form of gambling in the guise of a legitimate investment opportunity.",
	answers: [{
		text: "Working in my pjs? Yes please",
		msg: "We’d all love to have money streaming in while only working a few hours a week from a home computer… Sadly these ‘proven’ methods are more often than not scams designed to make you part with your money. Be careful!",
		reward: 0,
		correct: false
	},{
		text: "No thanks, sounds dodgy.",
		msg: "Congratulations, your vigilance added $1,000 to your super balance. Well done keeping your guard up.",
		reward: 1000,
		correct: true
	},{
		text: "I’d like more information.",
		msg: "There are legitimate ways to earn money quickly but these are few and far between. Be vigilant, do your homework and be very suspicious about anyone wanting you to part with money upfront!",
		reward: 0,
		correct: false 
	}]
},{
	text: "Interrupted work patterns can make it difficult for one partner to accumulate enough super for retirement. There may be tax benefits for you for making spouse contributions. If your spouse earns an income of less than $10,800 per annum, the first $3,000 of any spouse contribution entitles you to an 18% tax offset ($540 maximum tax offset per year). And even if your spouse earns up to $13,800, you may still get a partial tax offset. Interested?",
	tip: "You or your spouse may be eligible for a tax offset of up to $540 if you make extra payments to super on behalf of a spouse who is not working or has a low income.",
	answers: [{
		text: "Yes",
		msg: "Congratulations, you boosted your spouse’s super balance by $4,000. Sure the money isn’t in your account, but you received a small tax benefit. Everyone wins.",
		reward: 4000,
		correct: true
	},{
		text: "No",
		msg: "Sure the money isn’t in your account, but you could receive a small tax benefit and you and your spouse share everything anyway so everyone can win!",
		reward: 0,
		correct: false
	}]
},{
	text: "You’ve seen the ads – retirees lying around on cruise ships sipping cocktails. What does your ideal retirement look like? Should you look into what it would cost?",
	tip: "Remember, whatever position you’re in now, it’s not too late to take steps to make a difference to your future super balance.",
	answers: [{
		text: "Yes I don’t want to miss out",
		msg: "Congratulations, you’ve added $10,000 to your super balance. Nothing beats careful planning and good advice! Well, maybe that holiday cruise…",
		reward: 10000,
		correct: true
	},{
		text: "No, I could never afford that, it’s too late ",
		msg: "You’re approaching the finish line, but have you really done all you can to ensure your comfortable retirement? Don’t be lazy – find out! ",
		reward: 0,
		correct: false
	}]
},{
	text: "PHYSICAL CHALLENGE<br>Stop buying your daily coffee. Weekly saving +$25 to go into your super. Do you accept?",
	tip: "Albert Einstein describes compound interest as 'the greatest mathematical discovery of all time'.",
	answers: [{
		text: "Yes",
		msg: "Congratulations you just added an impressive $24,000 to your super! That’s a wake up call, isn’t it!",
		reward: 24000,
		correct: true
	},{
		text: "No",
		msg: "Did you know that if a 50 year old took up the challenge to cut out a couple of cafe lattes each day, and put the money they saved into their super, they could end up with $24,000 or more at retirement? How’s that for a powerful caffiene hit!",
		reward: 0,
		correct: false
	}]
},{
	text: "PHYSICAL CHALLENGE<br>Bring your own lunch to work. Weekly saving +$50 to go into your super. Do you accept?",
	tip: "Albert Einstein describes compound interest as 'the greatest mathematical discovery of all time'.",
	answers: [{
		text: "Yes",
		msg: "Congratulations you just added a massive $48,000 to your super! Have you lost weight too? You’re looking good!",
		reward: 48000,
		correct: true
	},{
		text: "No",
		msg: "Did you know that if a 50 year old took up the challenge to cut out expensive bought lunches in place of homemade sandwiches and tasty left-overs  each day, and put the money they saved into their super, they could end up with $48,000 or more at retirement? They might even drop a few unwanted kilos too!",
		reward: 0,
		correct: false
	}]
},{
	text: "PHYSICAL CHALLENGE<br>Quit a pack a day smoking habit. Weekly saving +$100 to go into your super. Do you accept?",
	tip: "Albert Einstein describes compound interest as 'the greatest mathematical discovery of all time'.",
	answers: [{
		text: "Yes",
		msg: "Congratulations you just added a whopping great $96,000 to your super! You also considerably improved your health in the process – woo hoo!!!",
		reward: 96000,
		correct: true
	},{
		text: "No",
		msg: "Did you know that if a 50 year old took up the challenge to cut out smokes forever, and put the money they saved into their super, they could end up with $600,000 or more at retirement? Did that piece of news knock the air out of your lungs?",
		reward: 0,
		correct: false
	},{
		text: "I don't smoke",
		msg: "Good for you! Do you have any other bad habits costing you money that you could be contributing to a comfortable retirement? Small changes now can make a huge difference later!",
		reward: 0,
		correct: true
	}]
}];
