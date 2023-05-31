"use client";
import { Header } from "widgets/header";
import { Main } from "widgets/main";
import { Roadmap } from "widgets/roadmap";
import { Slider } from "widgets/slider";
import RootLayout from "./layout";
import { NButton } from "shared/ui/buttons/NButton";
import { Team } from "widgets/team/ui";
import { CardMember } from "entities/cardMember";
import { useSlider } from "shared/models/store/store";
import { NText } from "shared/ui/text/ui";

const roadmapList = [
	[
		[
			"Разработка прототипа Gyber Social Platform ",
			"Разработка смарт контрактов ERC20, ERC721, The Macro-Economic DAO ",
			"Разработка Dapp The Macro-Economic DAO ",
		],
		[
			"Seed раунд инвестирования",
			"Открытие программ Social Bounty и Secure Bounty ",
			"Тестирование основного кода платформы",
		],
		[
			"PreSale",
			"Разработка прототипа децентрализованного, мультиплатформенного, вычислительного кластера",
			"Разработка прототипа Blockchain GiberNet",
		],
		[
			"Работа над проектами участников эксперимента",
			"Тестовые реализации проектов участников эксперимента",
			"Релиз Giber Social Platform",
		],
	],
	[
		[
			"Разработка прототипа Gyber Social Platform ",
			"Разработка смарт контрактов ERC20, ERC721, The Macro-Economic DAO ",
			"Разработка Dapp The Macro-Economic DAO ",
		],
		[
			"Seed раунд инвестирования",
			"Открытие программ Social Bounty и Secure Bounty ",
			"Тестирование основного кода платформы",
		],
		[
			"PreSale",
			"Разработка прототипа децентрализованного, мультиплатформенного, вычислительного кластера",
			"Разработка прототипа Blockchain GiberNet",
		],
		[
			"Работа над проектами участников эксперимента",
			"Тестовые реализации проектов участников эксперимента",
			"Релиз Giber Social Platform",
		],
	],
	[
		[
			"Разработка прототипа Gyber Social Platform ",
			"Разработка смарт контрактов ERC20, ERC721, The Macro-Economic DAO ",
			"Разработка Dapp The Macro-Economic DAO ",
		],
		[
			"Seed раунд инвестирования",
			"Открытие программ Social Bounty и Secure Bounty ",
			"Тестирование основного кода платформы",
		],
		[
			"PreSale",
			"Разработка прототипа децентрализованного, мультиплатформенного, вычислительного кластера",
			"Разработка прототипа Blockchain GiberNet",
		],
		[
			"Работа над проектами участников эксперимента",
			"Тестовые реализации проектов участников эксперимента",
			"Релиз Giber Social Platform",
		],
	],
];

export default function Home() {
	const slide = useSlider((store) => store.slide);

	const getCurrentComponent = () => {
		switch (slide) {
			case 0:
				return (
					<div className="item">
						<NText
							title="Добро пожаловать в будущее"
							subtitle="Уникальный эксперимент в области криптографии, компьютерной науки, социологии и экономики, который объединил всех участников для создания Кибер-социальной корпорации. Мы стремимся создать механизм прямого социально-экономического взаимодействия, принадлежащий всем участникам и позволяющий концентрировать общественные и финансовые ресурсы для реализации самых масштабных, глобальных проектов и децентрализованного управления ими по средствам блокчейн."
						/>
						<Team />

						<NText
							title=" "
							subtitle="Мы ищем талантливых и мотивированных людей, готовых участвовать в исследованиях и разработке проектов на базе открытых технологий и программного обеспечения. Для того чтобы присоединиться к нашему сообществу и принять участие в его деятельности, необходимо пройти через стартовый шлюз, опишите свои навыки, опыт работы и владение технологиями, которые могут быть полезны для развития нашего сообщества."
							button="Join"
						/>

						<div style={{ marginBottom: "80px" }}></div>

						<NText
							title="Партнеры"
							subtitle="Уникальный эксперимент в области криптографии, компьютерной науки, социологии и экономики, который объединил всех участников для создания Кибер-социальной корпорации. Мы стремимся создать механизм прямого социально-экономического взаимодействия, принадлежащий всем участникам и позволяющий концентрировать общественные и финансовые ресурсы для реализации самых масштабных, глобальных проектов и децентрализованного управления ими по средствам блокчейн. "
							button="Стать нашим партнером"
						/>
					</div>
				);

			case 1:
				return (
					<div className="item">
						<NText
							title="Миллионы - миллиардеры"
							subtitle="Уникальный эксперимент в области криптографии, компьютерной науки, социологии и экономики, который объединил всех участников для создания Кибер-социальной корпорации. Мы стремимся создать механизм прямого социально-экономического взаимодействия, принадлежащий всем участникам и позволяющий концентрировать общественные и финансовые ресурсы для реализации самых масштабных, глобальных проектов и децентрализованного управления ими по средствам блокчейн."
							button="Live Paper"
						/>
						<NText
							title="The Macro-Economic DAO"
							subtitle="Экосистема DAO представляет собой уникальную концепцию организации проектов и идей на базе децентрализованных автономных организаций. Каждое DAO в экосистеме предполагает реализацию конкретного проекта, предприятия, мероприятия, принятие решения или какого-либо еще общественного действия, предложенного сообществом участников эксперимента и разработчиками."
						/>
						<Roadmap
							title="Technical roadmap"
							roadmapList={roadmapList}
						/>

						<NText
							title="Партнеры"
							subtitle="Уникальный эксперимент в области криптографии, компьютерной науки, социологии и экономики, который объединил всех участников для создания Кибер-социальной корпорации. Мы стремимся создать механизм прямого социально-экономического взаимодействия, принадлежащий всем участникам и позволяющий концентрировать общественные и финансовые ресурсы для реализации самых масштабных, глобальных проектов и децентрализованного управления ими по средствам блокчейн. "
							button="Стать нашим партнером"
						/>
					</div>
				);

			case 2:
				return (
					<div className="item">
						<NText
							title="Миллионы - миллиардеры"
							subtitle="Уникальный эксперимент в области криптографии, компьютерной науки, социологии и экономики, который объединил всех участников для создания Кибер-социальной корпорации. Мы стремимся создать механизм прямого социально-экономического взаимодействия, принадлежащий всем участникам и позволяющий концентрировать общественные и финансовые ресурсы для реализации самых масштабных, глобальных проектов и децентрализованного управления ими по средствам блокчейн."
							button="Live Paper"
						/>

						<NText
							title="Партнеры"
							subtitle="Уникальный эксперимент в области криптографии, компьютерной науки, социологии и экономики, который объединил всех участников для создания Кибер-социальной корпорации. Мы стремимся создать механизм прямого социально-экономического взаимодействия, принадлежащий всем участникам и позволяющий концентрировать общественные и финансовые ресурсы для реализации самых масштабных, глобальных проектов и децентрализованного управления ими по средствам блокчейн. "
							button="Стать нашим партнером"
						/>
					</div>
				);

			case 3:
				return (
					<div className="item">
						<NText
							title="Будущее ИИ: исследование, раскрывающее новые горизонты"
							subtitle="AiC - это открытое сообщество, которое объединяет людей, заинтересованных в разработке и использовании моделей искусственного интеллекта в блокчейн среде. Используя DAO-контракты, мы обеспечиваем прозрачность, безопасность и открытость процесса разработки и использования моделей ИИ. В AiC вы можете обмениваться знаниями, опытом и создавать модели с минимальными затратами. Мы строим платформу для создания моделей ИИ в коммерческих и некоммерческих сферах, таких как медицина, финансы, транспорт и многие другие. Присоединяйтесь к нам и станьте частью революции в разработке и использовании искусственного интеллекта!"
						/>
						<NText
							title="Chat GPT"
							subtitle="Мы разработали для вас бесплатную модель GPT ...."
							button="Try it"
						/>
						<Roadmap title="Ai roadmap" roadmapList={roadmapList} />

						<NText
							title="Партнеры"
							subtitle="Уникальный эксперимент в области криптографии, компьютерной науки, социологии и экономики, который объединил всех участников для создания Кибер-социальной корпорации. Мы стремимся создать механизм прямого социально-экономического взаимодействия, принадлежащий всем участникам и позволяющий концентрировать общественные и финансовые ресурсы для реализации самых масштабных, глобальных проектов и децентрализованного управления ими по средствам блокчейн. "
							button="Стать нашим партнером"
						/>
					</div>
				);
			case 4:
				return (
					<div className="item">
						<NText
							title="Будущее ИИ: исследование, раскрывающее новые горизонты"
							subtitle="AiC - это открытое сообщество, которое объединяет людей, заинтересованных в разработке и использовании моделей искусственного интеллекта в блокчейн среде. Используя DAO-контракты, мы обеспечиваем прозрачность, безопасность и открытость процесса разработки и использования моделей ИИ. В AiC вы можете обмениваться знаниями, опытом и создавать модели с минимальными затратами. Мы строим платформу для создания моделей ИИ в коммерческих и некоммерческих сферах, таких как медицина, финансы, транспорт и многие другие. Присоединяйтесь к нам и станьте частью революции в разработке и использовании искусственного интеллекта!"
							button="Купить билет"
						/>

						<NText
							title="Партнеры"
							subtitle="Уникальный эксперимент в области криптографии, компьютерной науки, социологии и экономики, который объединил всех участников для создания Кибер-социальной корпорации. Мы стремимся создать механизм прямого социально-экономического взаимодействия, принадлежащий всем участникам и позволяющий концентрировать общественные и финансовые ресурсы для реализации самых масштабных, глобальных проектов и децентрализованного управления ими по средствам блокчейн. "
							button="Стать нашим партнером"
						/>
					</div>
				);

			default:
				break;
		}
	};

	return (
		<div className="page">
			<Header />
			<Main>
				<Slider />
				{getCurrentComponent()}
			</Main>
		</div>
	);
}
