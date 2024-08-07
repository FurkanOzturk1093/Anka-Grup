import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const TeamSection = () => {
  const team = useSelector((state) => state.team.team);

  return (
    <>
      <div className="ak-height-190 ak-height-lg-80"></div>
      <div className="container">
        <div className="team-contant">
          <div className="team-heading">
            <div className="ak-section-heading ak-style-1">
              <div className="background-text">Takım</div>
              <h2 className="ak-section-title">Ekibimiz</h2>
              <p className="ak-section-subtitle">
                Anka Grup, profesyonel ve deneyimli bir ekiple çalışmaktadır.
              </p>
            </div>
            <div className="ak-height-50 ak-height-lg-10"></div>
            <Link href="/team" className="more-btn">
              DAHA FAZLA
            </Link>
          </div>
          <div className="teams">
            <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 g-3 g-md-3">
              {team.map((member) => (
                <div className="col" key={member.id}>
                  <div
                    className="team-card ak-bg"
                    style={{
                      backgroundImage: `url(${member.imgSrc})`,
                    }}
                  >
                    <div className="team-style-1">
                      <div className="team-info">
                        <div className="team-title">
                          <Link href="/team-single">{member.name}</Link>
                          <p className="desp">{member.position}</p>
                        </div>
                        <div className="team-info-social">
                          <a href={member.social.linkedin} className="icon">
                            <Image
                              src="/assets/img/linkedinicon.svg"
                              alt="LinkedIn"
                              width={24}
                              height={24}
                            />
                          </a>
                          <a href={member.social.facebook} className="icon">
                            <Image
                              src="/assets/img/facebookicon.svg"
                              alt="Facebook"
                              width={24}
                              height={24}
                            />
                          </a>
                          <a href={member.social.twitter} className="icon">
                            <Image
                              src="/assets/img/twittericon.svg"
                              alt="Twitter"
                              width={24}
                              height={24}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamSection;
