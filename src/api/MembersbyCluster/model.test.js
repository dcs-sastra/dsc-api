import { MembersbyCluster } from '.'

let membersbyCluster

beforeEach(async () => {
  membersbyCluster = await MembersbyCluster.create(
    {
        "lead": {
            
            "name": "Kavin Raju S",
            "imgUrl": "Kavin Raju",
            "role": "DSC Lead, App Developer"
        },
        "app": [
            {
                
                "name": "Kathir Thaniyarasu",
                "imgUrl": "Kathir"
            },
            {
                
                "name": "TANVEER AHMAD H",
                "imgUrl": "Tanveer Ahmad"
            },
            {
                
                "name": "Arun Balaji TSR",
                "imgUrl": "arun"
            },
            {
                
                "name": "Sibi N",
                "imgUrl": "Sibi Nehru"
            },
            {
                
                "name": "Karthikeyan",
                "imgUrl": "Karthikeyan K"
            },
            {
                
                "name": "Ashwin Ram",
                "imgUrl": "Ashwin Ram"
            },
            {
                
                "name": "Seshan",
                "imgUrl": "male"
            }
        ],
        "flutter": [
            {
                
                "name": "Ashwin Ram",
                "imgUrl": "Ashwin Ram"
            },
            {
                
                "name": "Seshan",
                "imgUrl": "male"
            }
        ],
        "web": [
            {
                
                "name": "Aravind Srinivasan",
                "imgUrl": "Aravind Srinivasan"
            },
            {
                
                "name": "G Sai Svas",
                "imgUrl": "male"
            },
            {
                
                "name": "Srivathsan S",
                "imgUrl": "Sri Vathsan"
            },
            {
                
                "name": "Vashanth Saravanan",
                "imgUrl": "Vashanth Saravanan"
            },
            {
                
                "name": "K Vamsi Krishna",
                "imgUrl": "karanam vamsi"
            },
            {
                
                "name": "T Manikanta Reddy",
                "imgUrl": "tmanikanta reddy"
            },
            {
                
                "name": "Jaikanth",
                "imgUrl": "male"
            },
            {
                
                "name": "PV Lakshmi Narayanan",
                "imgUrl": "male"
            },
            {
                
                "name": "Sharath Sriram",
                "imgUrl": "male"
            }
        ],
        "ml": [
            {
                
                "name": "Anjineyulu TV",
                "imgUrl": "male"
            },
            {
                
                "name": "P Vijay Rama Raju",
                "imgUrl": "male"
            },
            {
                
                "name": "Sreenithi Balasubramanian",
                "imgUrl": "Sreenithi Balasubramanian"
            },
            {
                
                "name": "Vishal R",
                "imgUrl": "Vishal R"
            },
            {
                
                "name": "S Giteka",
                "imgUrl": "giteka senthilkumar"
            },
            {
                
                "name": "Sivaneshwar P",
                "imgUrl": "Sivaneshwar P"
            },
            {
                
                "name": "Gokul",
                "imgUrl": "male"
            }
        ],
        "cloud": [
            {
                
                "name": "Sivaneshwar P",
                "imgUrl": "Sivaneshwar P"
            },
            {
                
                "name": "Rohith",
                "imgUrl": "male"
            }
        ],
        "graphic": [
            {
                
                "name": "Kapil",
                "imgUrl": "male"
            }
        ],
        "content": [
            {
                
                "name": "Rogini S",
                "imgUrl": "Rogini"
            },
            {
                
                "name": "Akhil Bharadwaj",
                "imgUrl": "male"
            },
            {
                
                "name": "Subhashri",
                "imgUrl": "female"
            }
        ],
        "marketing": [
            {
                
                "name": "Nishanth S",
                "imgUrl": "Nishanth Sekar"
            },
            {
                
                "name": "Umesh Kanna",
                "imgUrl": "male"
            },
            {
                
                "name": "Syed Irfan",
                "imgUrl": "male"
            },
            {
                
                "name": "Mukunt B Surya",
                "imgUrl": "male"
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
