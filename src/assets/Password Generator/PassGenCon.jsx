import PassGen from "./PassGen";

function PassGenCon() {
  return (
    <div className="h-screen grid place-items-center">
      <PassGen
        checkboxData={[
          { id: "includeUppercase", title: "include uppercase letters" },
          { id: "includeLowercase", title: "include lowercase letters" },
          { id: "includeNumbers", title: "include numbers" },
          { id: "includeSymbols", title: "include symbols" },
        ]}
      />
    </div>
  );
}
export default PassGenCon;
