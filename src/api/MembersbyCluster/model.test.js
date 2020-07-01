import { MembersbyCluster } from '.'

let membersbyCluster

beforeEach(async () => {
  membersbyCluster = await MembersbyCluster.create(
    {
        "lead": {
            
            "name": "Kavin Raju S",
            "imgUrl": "Kavin Raju",
            "role": "DSC Lead, App Developer",
            "batch": "2020"
        },
        "app": [
            {
                
                "name": "Kathir Thaniyarasu",
                "imgUrl": "Kathir",
                "batch": "2021"
            },
            {
                
                "name": "TANVEER AHMAD H",
                "imgUrl": "Tanveer Ahmad",
                "batch": "2020"
            },
            {
                
                "name": "Arun Balaji TSR",
                "imgUrl": "arun",
                "batch": "2020"
            },
            {
                
                "name": "Sibi N",
                "imgUrl": "Sibi Nehru",
                "batch": "2021"
            },
            {
                
                "name": "Karthikeyan",
                "imgUrl": "Karthikeyan K",
                "batch": "2022"
            },
            {
                
                "name": "Ashwin Ram",
                "imgUrl": "Ashwin Ram",
                "batch": "2021"
            },
            {
                
                "name": "Seshan",
                "imgUrl": "male",
                "batch": "2021"
            }
        ],
        "flutter": [
            {
                
                "name": "Ashwin Ram",
                "imgUrl": "Ashwin Ram",
                "batch": "2021"
            },
            {
                
                "name": "Seshan",
                "imgUrl": "male",
                "batch": "2021"
            }
        ],
        "web": [
            {
                
                "name": "Aravind Srinivasan",
                "imgUrl": "Aravind Srinivasan",
                "batch": "2021"
            },
            {
                
                "name": "G Sai Svas",
                "imgUrl": "male",
                "batch": "2020"
            },
            {
                
                "name": "Srivathsan S",
                "imgUrl": "Sri Vathsan",
                "batch": "2020"
            },
            {
                
                "name": "Vashanth Saravanan",
                "imgUrl": "Vashanth Saravanan",
                "batch": "2021"
            },
            {
                
                "name": "K Vamsi Krishna",
                "imgUrl": "karanam vamsi",
                "batch": "2020"
            },
            {
                
                "name": "T Manikanta Reddy",
                "imgUrl": "tmanikanta reddy",
                "batch": "2020"
            },
            {
                
                "name": "Jaikanth",
                "imgUrl": "male",
                "batch": "2020"
            },
            {
                
                "name": "PV Lakshmi Narayanan",
                "imgUrl": "male",
                "batch": "2020"
            },
            {
                
                "name": "Sharath Sriram",
                "imgUrl": "male",
                "batch": "2020"
            }
        ],
        "ml": [
            {
                
                "name": "Anjineyulu TV",
                "imgUrl": "male",
                "batch": "2021"
            },
            {
                
                "name": "P Vijay Rama Raju",
                "imgUrl": "male",
                "batch": "2020"
            },
            {
                
                "name": "Sreenithi Balasubramanian",
                "imgUrl": "Sreenithi Balasubramanian",
                "batch": "2020"
            },
            {
                
                "name": "Vishal R",
                "imgUrl": "Vishal R",
                "batch": "2020"
            },
            {
                
                "name": "S Giteka",
                "imgUrl": "giteka senthilkumar",
                "batch": "2021"
            },
            {
                
                "name": "Sivaneshwar P",
                "imgUrl": "Sivaneshwar P",
                "batch": "2020"
            },
            {
                
                "name": "Gokul",
                "imgUrl": "male",
                "batch": "2020"
            }
        ],
        "cloud": [
            {
                
                "name": "Sivaneshwar P",
                "imgUrl": "Sivaneshwar P",
                "batch": "2020"
            },
            {
                
                "name": "Rohith",
                "imgUrl": "male",
                "batch": "2021"
            }
        ],
        "graphic": [
            {
                
                "name": "Kapil",
                "imgUrl": "male",
                "batch": "2020"
            }
        ],
        "content": [
            {
                
                "name": "Rogini S",
                "imgUrl": "Rogini",
                "batch": "2020"
            },
            {
                
                "name": "Akhil Bharadwaj",
                "imgUrl": "male",
                "batch": "2020"
            },
            {
                
                "name": "Subhashri",
                "imgUrl": "female",
                "batch": "2020"
            }
        ],
        "marketing": [
            {
                
                "name": "Nishanth S",
                "imgUrl": "Nishanth Sekar",
                "batch": "2020"
            },
            {
                
                "name": "Umesh Kanna",
                "imgUrl": "male",
                "batch": "2020"
            },
            {
                
                "name": "Syed Irfan",
                "imgUrl": "male",
                "batch": "2020"
            },
            {
                
                "name": "Mukunt B Surya",
                "imgUrl": "male",
                "batch": "2020"
            }
        ]
    }
)
})

describe('view', () => {
  it('returns simple view', () => {
    const view = membersbyCluster.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(membersbyCluster.id)
    expect(view.lead).toBe(membersbyCluster.lead)
    expect(view.app).toBe(membersbyCluster.app)
    expect(view.flutter).toBe(membersbyCluster.flutter)
    expect(view.web).toBe(membersbyCluster.web)
    expect(view.ml).toBe(membersbyCluster.ml)
    expect(view.cloud).toBe(membersbyCluster.cloud)
    expect(view.nonTech).toBe(membersbyCluster.nonTech)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = membersbyCluster.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(membersbyCluster.id)
    expect(view.lead).toBe(membersbyCluster.lead)
    expect(view.app).toBe(membersbyCluster.app)
    expect(view.flutter).toBe(membersbyCluster.flutter)
    expect(view.web).toBe(membersbyCluster.web)
    expect(view.ml).toBe(membersbyCluster.ml)
    expect(view.cloud).toBe(membersbyCluster.cloud)
    expect(view.nonTech).toBe(membersbyCluster.nonTech)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
