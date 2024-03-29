const image = {
	categories: [
		{
			name: 'Animals',
			models: [
				{
					name: 'Bison',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Animals/Bison/BisonPlains.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Animals/Bison/BisonPlains.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Animals/Bison/thumbnail.png'
				},
				{
					name: 'Cow',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Animals/Cow/Cow expanded.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Animals/Cow/Cow expanded.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Animals/Cow/thumbnail.png'
				},
				{
					name: 'Dog',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Animals/Dog/materials.mtl',
					obj:
						'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Animals/Dog/model_High+Quality+Scanned+and+cleaned+dog_20170522_225430513.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Animals/Dog/thumbnail.png'
				},
				{
					name: 'Elephant',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Animals/Elephant/materials.mtl',
					obj:
						'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Animals/Elephant/model_20170406_213946035.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Animals/Elephant/thumbnail.png'
				},
				{
					name: 'Emu',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Animals/Emu/Mesh_Emu.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Animals/Emu/Mesh_Emu.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Animals/Emu/thumbnail.png'
				},
				{
					name: 'Frog',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Animals/Frog/Frog.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Animals/Frog/Frog.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Animals/Frog/thumbnail.png'
				},
				{
					name: 'Goat',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Animals/Goat/Goat.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Animals/Goat/Goat.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Animals/Goat/thumbnail.png'
				},
				{
					name: 'Seahorse',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Animals/Seahorse/seahorse.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Animals/Seahorse/seahorse.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Animals/Seahorse/thumbnail.png'
				},
				{
					name: 'Shark',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Animals/Shark/Shark.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Animals/Shark/Shark.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Animals/Shark/thumbnail.png'
				},
				{
					name: 'Snail',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Animals/Snail/Snail_01.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Animals/Snail/Snail_01.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Animals/Snail/thumbnail.png'
				}
			]
		},
		{
			name: 'Foods',
			models: [
				{
					name: 'Cabbage',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Food/Cabbage/Cabbage_01.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Food/Cabbage/Cabbage_01.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Food/Cabbage/thumbnail.png'
				},
				{
					name: 'Corn',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Food/Corn/EarOfCorn_220.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Food/Corn/EarOfCorn_220.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Food/Corn/thumbnail.png'
				},
				{
					name: 'Donut',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Food/Donut/donut.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Food/Donut/donut.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Food/Donut/thumbnail.png'
				},
				{
					name: 'Grapes',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Food/Grapes/Grapes_01.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Food/Grapes/Grapes_01.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Food/Grapes/thumbnail.png'
				},
				{
					name: 'Lollipop',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Food/Lollipop/CHAHIN_LOLLIPOP.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Food/Lollipop/CHAHIN_LOLLIPOP.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Food/Lollipop/thumbnail.png'
				},
				{
					name: 'Popsicle',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Food/Popsicle/Popsicle.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Food/Popsicle/Popsicle.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Food/Popsicle/thumbnail.png'
				},
				{
					name: 'Sandwich',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Food/Sandwich/materials.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Food/Sandwich/model.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Food/Sandwich/thumbnail.png'
				},
				{
					name: 'Shrimp',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Food/Shrimp/materials.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Food/Shrimp/model.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Food/Shrimp/thumbnail.png'
				},
				{
					name: 'Steak',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Food/Steak/materials.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Food/Steak/model.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Food/Steak/thumbnail.png'
				},
				{
					name: 'Tomato',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Food/Tomato/Tomato_01.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Food/Tomato/Tomato_01.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Food/Tomato/thumbnail.png'
				}
			]
		},
		{
			name: 'Furniture',
			models: [
				{
					name: 'Arch',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Furniture/Arch/Archway3.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Furniture/Arch/Archway3.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Furniture/Arch/thumbnail.png'
				},
				{
					name: 'Bird_House',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Furniture/Bird_House/materials.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Furniture/Bird_House/model.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Furniture/Bird_House/thumbnail.png'
				},
				{
					name: 'Chair',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Furniture/Chair/WING.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Furniture/Chair/WING.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Furniture/Chair/thumbnail.png'
				},
				{
					name: 'Crate',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Furniture/Crate/materials.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Furniture/Crate/model.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Furniture/Crate/thumbnail.png'
				},
				{
					name: 'Desk',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Furniture/Desk/materials.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Furniture/Desk/model.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Furniture/Desk/thumbnail.png'
				},
				{
					name: 'Door',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Furniture/Door/CHAHIN_DOOR.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Furniture/Door/CHAHIN_DOOR.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Furniture/Door/thumbnail.png'
				},
				{
					name: 'Fence',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Furniture/Fence/CHAHIN_FENCE.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Furniture/Fence/CHAHIN_FENCE.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Furniture/Fence/thumbnail.png'
				},
				{
					name: 'Light',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Furniture/Light/materials.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Furniture/Light/model.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Furniture/Light/thumbnail.png'
				},
				{
					name: 'Toilet',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Furniture/Toilet/materials.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Furniture/Toilet/model.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Furniture/Toilet/thumbnail.png'
				},
				{
					name: 'Window',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Furniture/Window/CHAHIN_WINDOW.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Furniture/Window/CHAHIN_WINDOW.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Furniture/Window/thumbnail.png'
				}
			]
		},
		{
			name: 'Nature',
			models: [
				{
					name: 'Cactus',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Nature/Cactus/materials.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Nature/Cactus/model.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Nature/Cactus/thumbnail.png'
				},
				{
					name: 'Cloud',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Nature/Cloud/Cloud.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Nature/Cloud/Cloud.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Nature/Cloud/thumbnail.png'
				},
				{
					name: 'Flower',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Nature/Flower/Flower.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Nature/Flower/Flower.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Nature/Flower/thumbnail.png'
				},
				{
					name: 'Hibiscus',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Nature/Hibiscus/HibicusFlower.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Nature/Hibiscus/HibicusFlower.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Nature/Hibiscus/thumbnail.png'
				},
				{
					name: 'Log',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Nature/Log/PUSHILIN_log.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Nature/Log/PUSHILIN_log.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Nature/Log/thumbnail.png'
				},
				{
					name: 'Nest',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Nature/Nest/PUSHILIN_birds_nest.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Nature/Nest/PUSHILIN_birds_nest.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Nature/Nest/thumbnail.png'
				},
				{
					name: 'Palm',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Nature/Palm/AlexandraPalmTree.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Nature/Palm/AlexandraPalmTree.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Nature/Palm/thumbnail.png'
				},
				{
					name: 'Pine',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Nature/Pine/PineTree.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Nature/Pine/PineTree.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Nature/Pine/thumbnail.png'
				},
				{
					name: 'Rose',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Nature/Rose/PUSHILIN_rose.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Nature/Rose/PUSHILIN_rose.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Nature/Rose/thumbnail.png'
				},
				{
					name: 'Tree',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Nature/Tree/materials.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Nature/Tree/model.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Nature/Tree/thumbnail.png'
				}
			]
		},
		{
			name: 'Technology',
			models: [
				{
					name: 'Bluetooth',
					mtl:
						'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Technology/Bluetooth/1315+Bluetooth+Earpiece.mtl',
					obj:
						'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Technology/Bluetooth/1315 Bluetooth+Earpiece.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Technology/Bluetooth/thumbnail.png'
				},
				{
					name: 'Camera',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Technology/Camera/Camera.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Technology/Camera/Camera.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Technology/Camera/thumbnail.png'
				},
				{
					name: 'Gear',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Technology/Gear/gear.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Technology/Gear/gear.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Technology/Gear/thumbnail.png'
				},
				{
					name: 'Headphones',
					mtl:
						'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Technology/Headphones/HeadPhones_01(1).obj',
					obj:
						'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Technology/Headphones/HeadPhones_01.mtl',
					thumb:
						'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Technology/Headphones/thumbnail.png'
				},
				{
					name: 'Headset',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Technology/Headset/materials.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Technology/Headset/model.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Technology/Headset/thumbnail.png'
				},
				{
					name: 'Laptop',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Technology/Laptop/Laptop.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Technology/Laptop/Laptop.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Technology/Laptop/thumbnail.png'
				},
				{
					name: 'Mic',
					mtl:
						'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Technology/Mic/CHAHIN_MICROPHONE.mtl',
					obj:
						'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Technology/Mic/CHAHIN_MICROPHONE.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Technology/Mic/thumbnail.png'
				},
				{
					name: 'Phone',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Technology/Phone/1327+iPhone.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Technology/Phone/1327+iPhone.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Technology/Phone/thumbnail.png'
				},
				{
					name: 'Printer',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Technology/Printer/1322+Printer.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Technology/Printer/1322+Printer.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Technology/Printer/thumbnail.png'
				},
				{
					name: 'Videocam',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Technology/Videocam/materials.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Technology/Videocam/model.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Technology/Videocam/thumbnail.png'
				}
			]
		},
		{
			name: 'Transport',
			models: [
				{
					name: 'Glider',
					mtl:
						'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Transport/Glider/1357+Hang+Glider.mtl',
					obj:
						'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Transport/Glider/1357+Hang+Glider.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Transport/Glider/thumbnail.png'
				},
				{
					name: 'Helicopter',
					mtl:
						'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Transport/Helicopter/Helicopter_01.mtl',
					obj:
						'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Transport/Helicopter/Helicopter_01.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Transport/Helicopter/thumbnail.png'
				},
				{
					name: 'Jet',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Transport/Jet/1397+Jet.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Transport/Jet/1397+Jet.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Transport/Jet/thumbnail.png'
				},
				{
					name: 'Kayak',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Transport/Kayak/1386+Kayak.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Transport/Kayak/1386+Kayak.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Transport/Kayak/thumbnail.png'
				},
				{
					name: 'Nissan',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Transport/Nissan/GTR.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Transport/Nissan/GTR.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Transport/Nissan/thumbnail.png'
				},
				{
					name: 'Saucer',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Transport/Saucer/flying+sacuer.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Transport/Saucer/flying+sacuer.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Transport/Saucer/thumbnail.png'
				},
				{
					name: 'Scooter',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Transport/Scooter/Spirit.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Transport/Scooter/Spirit.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Transport/Scooter/thumbnail.png'
				},
				{
					name: 'Spaceship',
					mtl:
						'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Transport/Spaceship/Lo_poly_Spaceship_01_by_Liz_Reddington.mtl',
					obj:
						'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Transport/Spaceship/Lo_poly_Spaceship_01_by_Liz_Reddington.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Transport/Spaceship/thumbnail.png'
				},
				{
					name: 'Submarine',
					mtl: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Transport/Submarine/submarine.mtl',
					obj: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Transport/Submarine/submarine.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Transport/Submarine/thumbnail.png'
				},
				{
					name: 'Unicycle',
					mtl:
						'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Transport/Unicycle/cupic_monocycle.mtl',
					obj:
						'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Transport/Unicycle/cupic_monocycle.obj',
					thumb: 'https://s3.ap-south-1.amazonaws.com/scapic-others/Models/Transport/Unicycle/thumbnail.png'
				}
			]
		}
	]
};

export default image;
