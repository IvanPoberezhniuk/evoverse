import { useEffect, useState } from "react";

const useMetaMask = () => {
  const [accounts, setAccounts] = useState<Array<string>>([]);
  const [signature, setSignature] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accs: Array<string>) => {
          setAccounts(accs);
        })
        .catch((err: any) => console.error(err));

      window.ethereum.on("accountsChanged", (accs: Array<string>) => {
        setAccounts(accs);
      });
    } else {
      console.error("MetaMask is not installed!");
    }
  }, []);

  const handleLogIn = async () => {
    await fetch(`/auth/nonce/${accounts[0]}`, {})
      .then((res) => res.json())
      .then((json) => {
        setMessage(json.string);
      });

    const randomMessage = "Sign in to My App: " + message;
    try {
      const signedMessage = await window.ethereum.request({
        method: "personal_sign",
        params: [randomMessage, accounts[0], ""],
      });
      setSignature(signedMessage);

      await fetch(`/auth/metamask/sign-in`, {
        method: "POST",
        body: JSON.stringify({
          walletAddress: accounts[0],
          signature: signedMessage,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          setMessage(json.string);
        });
    } catch (error) {
      console.error("Sign in error:", error);
    }
  };

  interface ISignUp {
    name: string;
  }

  const handleSignUp = async ({ name }: ISignUp) => {
    await fetch(`/auth/nonce/${accounts[0]}`, {})
      .then((res) => res.json())
      .then((json) => {
        setMessage(json.string);
      });

    const randomMessage = "Sign UP to My App: " + message;

    try {
      const signedMessage = await window.ethereum.request({
        method: "personal_sign",
        params: [randomMessage, accounts[0], ""],
      });
      setSignature(signedMessage);
      await fetch(`/auth/metamask/sign-in`, {
        method: "POST",
        body: JSON.stringify({
          walletAddress: accounts[0],
          signature: signedMessage,
          name,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          setMessage(json.string);
        });
    } catch (error) {
      console.error("Sign in error:", error);
    }
  };

  return { accounts, signature, message, handleSignUp, handleLogIn };
};

export default useMetaMask;
