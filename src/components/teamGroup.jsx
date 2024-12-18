import "../style/teamGroup.css";

const teamGroup = () => {
  return (
    <>
    <h3 className="team-title">Los miembros del proyecto</h3>
    <div className="team-group">
     
     <div
       className="team-avatar"
       style={{
         backgroundImage: "url('https://i.pravatar.cc/150?img=1')",
       }}
     ></div>
     <div
       className="team-avatar"
       style={{
         backgroundImage: "url('https://i.pravatar.cc/150?img=2')",
       }}
     ></div>
     <div
       className="team-avatar"
       style={{
         backgroundImage: "url('https://i.pravatar.cc/150?img=3')",
       }}
     ></div>
     <div
       className="team-avatar"
       style={{
         backgroundImage: "url('https://i.pravatar.cc/150?img=9')",
       }}
     ></div>
   </div>
    </>
  );
};

export default teamGroup;
